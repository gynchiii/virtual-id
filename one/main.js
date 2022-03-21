let links = {
  github: 'gynchiii',
  instagram: '.com/gynchiii',
  discord: '.gg/5nqxpqCYBn',
  linkedin: '.com/in/joey-rafael-8bbb411ab'
}

function changeSocialMedia() {
  document.getElementById('userName').textContent = 'Joey Diab'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}${links[social]}`
  }
}

changeSocialMedia()

function getGithubInfos() {
  const url = `https://api.github.com/users/${links.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioGit.textContent = data.bio
      subtitleName.textContent = data.login
    })
}

getGithubInfos()