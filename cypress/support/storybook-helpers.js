const getStorybookComponentUrl = (title, story) => {
  let url = 'iframe.html?id=';

  if (typeof (title) === 'string') {
    url += title.replace('/', '-').toLocaleLowerCase() + "--"
  }

  if (typeof (story) === 'string') {
    url += story.toLocaleLowerCase()
  }

  return url
}

module.exports = getStorybookComponentUrl