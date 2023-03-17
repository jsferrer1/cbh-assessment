const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return a string", () => {
    const result = deterministicPartitionKey();
    expect(typeof result).toBe("string");
  });

  it("should return a partition key with length <= 256", () => {
    const result = deterministicPartitionKey();
    expect(result.length).toBeLessThanOrEqual(256);
  });

  it("should return a partition key with length > 1 when event.partitionKey is undefined", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("should return a partition key with length > 1 when event.partitionKey is null", () => {
    const result = deterministicPartitionKey({ partitionKey: null });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is an empty string", () => {
    const result = deterministicPartitionKey({ partitionKey: "" });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a string of length 1", () => {
    const result = deterministicPartitionKey({ partitionKey: "a" });
    expect(result).toBe("a");
  });

  it("should return a partition key with length > 1 when event.partitionKey is a string of length 256", () => {
    const result = deterministicPartitionKey({ partitionKey: "a".repeat(256) });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a string of length 257", () => {
    const result = deterministicPartitionKey({ partitionKey: "a".repeat(257) });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a number", () => {
    const result = deterministicPartitionKey({ partitionKey: 123 });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is an object", () => {
    const result = deterministicPartitionKey({ partitionKey: {} });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is an array", () => {
    const result = deterministicPartitionKey({ partitionKey: [] });
    expect(result.length).toBe(0);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a boolean", () => {
    const result = deterministicPartitionKey({ partitionKey: true });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a function", () => {
    const result = deterministicPartitionKey({ partitionKey: () => {} });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a symbol", () => {
    const result = deterministicPartitionKey({ partitionKey: Symbol() });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a BigInt", () => {
    const result = deterministicPartitionKey({ partitionKey: BigInt(123) });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a date", () => {
    const result = deterministicPartitionKey({ partitionKey: new Date() });
    expect(result.length).toBeGreaterThan(1);
  });

  it("should return a partition key with length > 1 when event.partitionKey is a regular expression", () => {
    const result = deterministicPartitionKey({ partitionKey: /test/ });
    expect(result.length).toBeGreaterThan(1);
  });
});