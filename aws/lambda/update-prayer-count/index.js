import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const dynamodb = new DynamoDBClient();
const dynamodbClient = DynamoDBDocumentClient.from(dynamodb);
const tableName = 'ArdentPrayers_Dev';

export const handler = async (event) => {
	console.log(`Payload: \n ID - ${event.id}, \n Date - ${event.date} \n Count - ${event.count}`);

	/**
	 * When you have a DynamoDB database that is created with a sort key you have to include it
	 * in the `Key` object otherwise you'll keep getting the dreaded "key doesn't match your schema" error.
	 */
	const command = new UpdateCommand({
		TableName: tableName,
		Key: {
			PrayerId: event.id,
			CreatedDate: event.date
		},
		UpdateExpression: 'set PrayerCount = :newCount',
		ExpressionAttributeValues: {
			':newCount': event.count
		},
		ReturnValues: 'ALL_NEW'
	});

	const response = await dynamodbClient.send(command);
	console.log(response);
	return response;
};
