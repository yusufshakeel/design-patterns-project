import DatabaseConnection
  from '../../../../../app/creational-design-patterns/singleton/database/DatabaseConnection';

describe('Testing singleton - Database', () => {
  test('Should be able to create only one instance of database connection', () => {
    const dbConnection1 = DatabaseConnection.getInstance();
    const dbConnection2 = DatabaseConnection.getInstance();
    expect(dbConnection1).toStrictEqual(dbConnection2);
    expect(dbConnection1.doSomething()).toBe('Did something...');
  });
});