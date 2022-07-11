const AWS = require('aws-sdk')
const region = AWS.config.region
const dynamoDbClient = new AWS.DynamoDB.DocumentClient({ region })

const usersTableName = process.env.USERS_TABLE_NAME

exports.getUsers = async () => {

  const users = await dynamoDbClient.scan({
    TableName: usersTableName,
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(users, null, 2),
  }
}
