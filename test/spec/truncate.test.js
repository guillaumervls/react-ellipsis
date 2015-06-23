var truncate = require('../../src/truncate');

describe('#truncate', function () {
  var LONG_TEXT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  var CONTAINER_ID = 'test-container';

  function createContainer (text, w, h) {
    var container = document.createElement('div');
    container.id = CONTAINER_ID;

    container.style.width = w + 'px';
    container.style.height = h + 'px';
    container.style.lineHeight = '10px';

    var textNode = document.createTextNode(text);
    container.appendChild(textNode);

    document.getElementsByTagName('body')[0].appendChild(container);

    return container;
  }

  function assertTruncated(container, original) {
    var start = original.substring(0, 5);
    var end = original.substring(original.length - 5);

    var len = container.textContent.length;

    container.textContent.substr(0, start.length).should.equal(start);
    container.textContent.substring(len - 3).should.equal('...');
    container.textContent.indexOf(end).should.be.below(0);
  }

  afterEach(function () {
    var container = document.getElementById(CONTAINER_ID);
    if (container) {
      container.parentNode.removeChild(container);
    }
  });

  it('does nothing when given invalid input', function () {
    // should not throw an exception
    truncate();
  });

  it('truncates long text', function () {
    var container = createContainer(LONG_TEXT, 100, 100);
    truncate(container);

    assertTruncated(container, LONG_TEXT);
  });

  it('sets the title when truncating', function () {
    var container = createContainer(LONG_TEXT, 100, 100);
    truncate(container);

    container.title.should.equal(LONG_TEXT);
  });

  it('does not truncate text that fits', function () {
    var text = 'short text that fits';

    var container = createContainer(text, 100, 100);
    truncate(container);

    container.textContent.should.equal(text);
    container.title.should.equal('');
  });

  it('handles newlines in the text', function () {
    var text =
      'line 1\n' +
      'line 2\n' +
      'line 3\n' +
      'line 4\n';

    var container = createContainer(text, 100, 20);
    truncate(container);

    assertTruncated(container, text);
  });
});
