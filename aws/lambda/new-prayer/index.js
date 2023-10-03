import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const dynamodb = new DynamoDBClient();
const dynamodbClient = DynamoDBDocumentClient.from(dynamodb);
const tableName = 'ArdentPrayers_Dev';

export const handler = async (event) => {
	console.log('Payload: ', event);

	// Create a timestamp, this is formatted in date time string format
	const timestamp = new Date().toISOString();

	// Create db object with form data sent from client
	const dbData = {
		PrayerId: uuidv4(),
		CreatedDate: timestamp,
		Message: event.formMessage,
		Name: event.formName,
		PrayerCount: 0,
		Title: event.formTitle
	}

	// Assemble db command to create a new item
	const command = new PutCommand({
		TableName: tableName,
		Item: dbData
	});

	// Assemble our response vars
	let body;
	let statusCode = '200';

	try {
		/**
		 * Inserting a new item with JS v3 API does not return an object with the data you inserted or the typical
		 * object you would get when using fetch(). Instead, it returns an object with a `$metadata` object that
		 * contains these properties:
		 * 1. httpStatuscode
		 * 2. requestId
		 * 3. attempts
		 * 4. totalRetryDelay
		 */
		const response = await dynamodbClient.send(command);

		if (response.$metadata.httpStatusCode !== 200) {
			new Error(`Prayer request could not be added: ${response.status}`);
		}

		body = dbData;

	} catch (error) {
		statusCode = '400';
		body = error.message;
		console.log('Error:', error.message);
	} finally {
		body = JSON.stringify(body);
	}

	return {
		statusCode,
		body
	}
};