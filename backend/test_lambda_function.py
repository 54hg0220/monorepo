# flake8: noqa: D100 D103
# backend/test_lambda_function.py
import json
from lambda_function import lambda_handler


def test_lambda_handler():
    # Simulate AWS Lambda event and context
    event = {}
    context = {}

    # Call the Lambda handler function
    response = lambda_handler(event, context)

    # Assert the response
    assert response["statusCode"] == 200
    body = json.loads(response["body"])
    assert body["message"] == "This is test v3"
