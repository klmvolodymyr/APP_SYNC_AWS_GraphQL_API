mutation CreateTestEvent {
  createTestEvent(
    input: {
      recipientCriteria: {
        upns: [
          "test@google.com",
          "store@yahoo.com"
        ]
      },
      body: {
        subject: "example subject",
        text: "The word content with the notification details"
      },
      resource: {
        link: "https://test/test",
        type: "internal"
      },
      categoryCode: "internal_mobility"
    }
  ) {
    id
  }
}