describe('test of 6-th task', () => {
  it('ageClassification() test', () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(1)).toBe('детский возраст');
    expect(ageClassification(24)).toBe('детский возраст');
    expect(ageClassification(24.01)).toBe('молодой возраст');
    expect(ageClassification(44)).toBe('молодой возраст');
    expect(ageClassification(44.01)).toBe('средний возраст');
    expect(ageClassification(65)).toBe('средний возраст');
    expect(ageClassification(65.1)).toBe('пожилой возраст');
    expect(ageClassification(75)).toBe('пожилой возраст');
    expect(ageClassification(75.01)).toBe('старческий возраст');
    expect(ageClassification(90)).toBe('старческий возраст');
    expect(ageClassification(90.01)).toBe('долгожители');
    expect(ageClassification(122)).toBe('долгожители');
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});