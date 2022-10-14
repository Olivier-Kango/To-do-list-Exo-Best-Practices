const addItem = require('./addremove.js');


describe('Testing the add function', () => {
  test('Program 3 sections a day should be added in the unorder list', () => {
    // arange
    const listContainer = document.querySelector('.ul-lists');
    const item = 'Code 3 sections a day to finish the captone project';

    // Act
    addItem.item(item, listContainer);
    const taskItems = listContainer.querySelectorAll('li');

    // Assert
    expect(taskItems).toHaveLength(1);
  });
});