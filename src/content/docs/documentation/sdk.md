---
title: Using the Frame SDK
description: A guide to using the Frame SDK.
---

The Frame SDK provides a simple Typescript-based interface for interacting with your deployment. At its core, the SDK revolves around the concept of a document.

## What is a "Document"?

In Frame, a "document" represents a unit of data that gets embedded and stored in your vector database. Because Frame is multimodal, a document can be:

- A piece of text (e.g., a paragraph, product description)
- An image (e.g., a photo or screenshot)
- A combination of both text and image (e.g., an image with a caption)

We developed Frame to be flexible, allowing developers to adapt the platform to their specific embedding needs.

## Installation

```bash
npm install frame-v1
```

## Usage

```javascript
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

### getDocuments

Gets a list of documents with optional arguments to paginate results.

**Arguments:**

- `limit` _number_ (optional)
- `offset` _number_ (optional)

By default, limit is 20 and offset is 0.

**Example:**

```javascript
frame.getDocuments();
frame.getDocuments({ limit: 10, offset: 15 });
```

### getDocumentById

Find a specific document by its ID.

**Arguments:**

- `id` _number_ (required)

**Example**

```javascript
frame.getDocumentById(3);
```

### createDocuments

Add new documents. A document may optionally omit a URL or a description, but at least one of either _must_ exist.

**Arguments:**

- `documents` _array_ (required)

:::tip
Documents have this shape:

`{url?: string, description?: string, metadata?: object}`

At least one of `url` or `description` must be provided.
:::

**Example**

```javascript
const documents = [
  {
    url: "https://media.newyorker.com/photos/59095c501c7a8e33fb38c107/master/pass/Monkey-Selfie-DailyShouts.jpg",
    description: "foo",
    metadata: {
      title: "bar",
      altText: "baz",
    },
  },
  {
    url: "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg",
  },
];

frame.createDocuments(documents);
```

### deleteDocumentById

Delete a specific document by its ID.

**Arguments:**

- `id` _number_ (required)

**Example**

```javascript
frame.deleteDocumentById(1);
```

### searchDocuments

Search similar documents based on input, with optional arguments for topK (number of results) and similarity threshold (0.0 - 1.0).

By default, topK is 10 and threshold is 0.

**Arguments:**

- `url` _string_ (at least one of url or description must exist)
- `description` _string_ (at least one of url or description must exist)
- `threshold` _number_ (optional)
- `topK` _number_ (optional)

**Example**

```javascript
const query = {
  url: "https://example.com/monalisa.jpeg",
  description: "An image of a sitting woman",
  threshold: 0.3,
  topK: 5,
};

frame.searchDocuments(query);
```

### getRecommendations

Get similar documents based on a document's ID.

By default, topK is 10 and threshold is 0.

**Arguments:**

- `id` _number_ (required)
- `topK` _number_ (optional)
- `threshold` _number_ (optional)

**Example**

```javascript
frame.getRecommendations(1, { topK: 5, threshold: 0.3 });
```
