# FUTBIN Web Scrapper

### Scrapes the stats of a player from futbin using puppeteer

#### How To use

call the getFutbin function with the url of your player e.g getFutbin("https://www.futbin.com/20/player/48200/riyad-mahrez");

```javascript
async function getFutbin(url) {
    ...
}
```

The function will return a player object which will look like this

```javascript
[
  'Riyad Mahrez - TOTS': {
    info: {
      Name: 'Riyad Mahrez',
      Club: ' Manchester City',
      Nation: ' Algeria',
      League: ' Premier League',
      Skills: '5 ',
      'Weak Foot': '4 ',
      'Intl. Rep ': '3 ',
      'Foot ': 'Left',
      'Height ': `179cm | 5'10"`,
      'Weight ': '67',
      Revision: 'TOTS',
      'Def. WR': 'Med',
      'Att. WR': 'Med',
      'Added on': '2020-05-01',
      Origin: 'TOTSSF-PL',
      'R.Face ': '',
      'B.Type': 'Lean',
      Age: '29 years old'
    },
    stats: {
      PACE: 95,
      Acceleration: 98,
      'Sprint Speed': 92,
      SHOOTING: 94,
      Positioning: 95,
      Finishing: 92,
      'Shot Power': 95,
      'Long Shots': 96,
      Volleys: 91,
      Penalties: 84,
      PASSING: 95,
      Vision: 97,
      Crossing: 97,
      'FK. Accuracy': 93,
      'Short Passing': 93,
      'Long Passing': 90,
      Curve: 99,
      DRIBBLING: 97,
      Agility: 99,
      Balance: 94,
      Reactions: 83,
      'Ball Control': 98,
      Dribbling: 98,
      Composure: 91,
      DEFENDING: 50,
      Interceptions: 51,
      'Heading Accuracy': 63,
      'Def. Awareness': 59,
      'Standing Tackle': 40,
      'Sliding Tackle': 28,
      PHYSICALITY: 77,
      Jumping: 78,
      Stamina: 99,
      Strength: 70,
      Aggression: 62
    },
    Price: '116,000 ',
    'Last Updated': 2020-08-29T19:21:50.151Z
  }
]
```
