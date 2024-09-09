# flake8: noqa: D205
"""
This module contains the AWS Lambda function for handling requests.
It defines the main entry point for the Lambda execution.
"""

import json


def lambda_handler(event, context):
    """
    AWS Lambda function handler for processing incoming requests.

    This function serves as the entry point for the Lambda execution.
    It returns a simple message along with appropriate headers for CORS
    support.

    Args:
        event (dict): The event data passed to the Lambda function.
        context (LambdaContext): The runtime information of the Lambda
        function.

    Returns:
        dict: A dictionary containing the response with status code, body, and
        headers.
    """
    message = "This is test v3"

    return {
        "statusCode": 200,
        "body": json.dumps({"message": message}),
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    }
