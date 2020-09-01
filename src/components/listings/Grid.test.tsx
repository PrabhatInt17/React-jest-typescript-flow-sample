import data from '../../data/courses.json';

describe('Number tests', () => {
  const numItems = data.length;
  it('should test number of item is equal to 12', () => {
    expect(numItems).toBe(12);
  });

  it('should test number of item is greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

describe('String tests', () => {
  const dataTest = data[0].title;
  it('should match JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
    //expect(dataTest).toBe(/JS/); throws error
  });

  it('should contain React in the title', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays & objects

describe('Arrays and object tests', () => {
  const data2 = ['React Native', 'React'];
  test('The list of courses contains React Native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
  });

  test('The first course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a property title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
