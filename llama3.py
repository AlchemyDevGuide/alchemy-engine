import boto3
import json

# Define the prompt
prompt_data = "You are a Material Science Expert. Answer all the questions related to Material Science."

# Initialize the Bedrock client
bedrock = boto3.client(service_name="bedrock-runtime")

# Create the request payload
payload = {
    "prompt": prompt_data,
    "max_gen_len": 256,  # Reduced length to avoid potential issues
    "temperature": 0.5,
    "top_p": 0.9
}

# Convert payload to JSON string
body = json.dumps(payload)

# Define the model ID
model_id = "meta.llama3-70b-instruct-v1:0"

try:
    # Invoke the Bedrock model
    response = bedrock.invoke_model(
        body=body,
        modelId=model_id,
        accept="application/json",
        contentType="application/json"
    )

    # Read and parse the response
    response_body = json.loads(response["body"].read().decode("utf-8"))

    # Debugging: Print the full response structure
    print("Full Response:", json.dumps(response_body, indent=2))

    # Extract generated text based on response format
    if "generation" in response_body:
        response_text = response_body["generation"]
    elif "outputs" in response_body and len(response_body["outputs"]) > 0:
        response_text = response_body["outputs"][0].get("text", "No text found")
    elif "output" in response_body:  # Some models return "output"
        response_text = response_body["output"]
    else:
        response_text = "Unexpected response format."

    # Print the result
    print("\nGenerated Response:\n", response_text)

except Exception as e:
    print("Error invoking the model:", str(e))
