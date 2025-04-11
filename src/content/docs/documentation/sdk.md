---
title: Using the Frame SDK
description: A guide to using the Frame SDK.
---

The Frame SDK provides a simple Typescript-based interface for interacting with your deployment. At its core, the SDK revolves around the concept of a document.

### What is a "Document"?

In Frame, a "document" represents a unit of data that gets embedded and stored in your vector database. Because Frame is multimodal, a document can be:

- A piece of text (e.g., a paragraph, product description)

- An image (e.g., a photo or screenshot)

- A combination of both text and image (e.g., an image with a caption)

We developed Frame to be flexible in this regard, to allow developer to use our platform however it suits their embedding needs.

## Installation

```bash
npm install frame-v1
```

## Usage

```typescript
import { Client } from "frame-v1`";

const frame = new Client({
  apiKey: "<YOUR_API_KEY>",
  baseURL: "https://<YOUR_API_ENDPOINT>.com",
});

// Example usage
frame.getDocuments().then((response) => {
  console.log(response);
});
```

:::tip
The API Key and API endpoint are provided through the [deployment process](/documentation/deployment#step-4-deploy-the-infrastructure-to-aws).
:::

## API Methods

getDocuments(params?) – Retrieve a list of documents

getDocumentById(id) – Fetch a document by its ID

createDocuments(documents) – Upload new documents

deleteDocumentById(id) – Delete a document

searchDocuments(document, topK, threshold) - Search similar documents based on input, with optional parameters for # of results and similarity threshold

getRecommendations(id) - Get documents similar to
