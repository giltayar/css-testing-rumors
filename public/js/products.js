var productData = {
  products: [
    {
      id: '1',
      thumb: 'img/xp.jpg',
      name: 'Extreme Programming Explained',
      author: 'Kent Beck with Cynthia Andres',
      price: 9.99,
    },
    {
      id: '2',
      thumb: 'img/osherove.webp',
      name: 'The Art of Unit Testing',
      author: 'Roy Osherove',
      price: 44.09,
    },
    {
      id: '3',
      thumb: 'img/crispin.jpg',
      name: 'Agile Testing',
      author: 'Lisa Crispin and Janet Gregory',
      price: 49.07,
    },
    {
      id: '4',
      thumb: 'img/goos.jpg',
      name: 'Growing Object Oriented Software Guided By Tests',
      author: 'Steve Freeman and Nat Pryce',
      price: 31.67,
    },
    {
      id: '5',
      thumb: 'img/richardson.jpg',
      name: 'Java For Testers',
      author: 'Alan Richardson',
      price: 29.99,
    },
    {
      id: '6',
      thumb: 'img/refactoring.jpg',
      name: 'Refactoring',
      author: 'Martin Fowler',
      price: 29.99,
    },
    {
      id: '7',
      thumb: 'img/tdd.jpg',
      name: 'Test Driven Development',
      author: 'Kent Beck',
      price: 34.99,
    },
    {
      id: '8',
      thumb: 'img/how-google.jpg',
      name: 'How Google Tests Software',
      author: 'James Whittaker & James Arbon & Jeff Carollo',
      price: 40.31,
    },
  ],
}

function getProducts() {
  return productData
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}
