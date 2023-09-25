import { UpdateItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamodb = new DynamoDBClient();
const tableName = 'ArdentPrayers_Dev';

export const handler = async (event) => {
	const command = new UpdateItemCommand({
		TableName: tableName,
		Key: {
			PrayerId: { S: event.id }
		},
		UpdateExpression: 'set Count = :newCount',
		ExpressionAttributeValues: {
			':newCount': { NUM: event.count }
		},
		ReturnValues: 'ALL_NEW'
	});

	const response = await dynamodb.send(command);
	console.log(response);
	return response;
};
