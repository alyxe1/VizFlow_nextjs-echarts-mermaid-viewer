# My Process

Here is a diagram of our workflow.

```mermaid
graph TD
    A[Start] --> B[Is it ready?];
    B -->|Yes| C[End];
    B -->|No| D[Wait];
    D --> B;
```
