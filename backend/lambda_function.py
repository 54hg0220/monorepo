import json


def lambda_handler(event, context):
    message = f"This is test v3"

    return {
        "statusCode": 200,
        "body": json.dumps({"message": message}),
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    }
