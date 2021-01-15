# User Stories

**User Story**: description of the application funcionality from the user's prespective.

**Common Format**: As **[type of user]**, I want **[an action]** so that **[a benefit]**

---

1. I want to log my running workouts with location, distance, pace and steps/minute

2. log my cycling workouts with location, distance, time, speed and elevation

3. I want to see all my workouts a glance, so I can easily track my progress over time

4. I want to see my workouts on a map

5. see all my workouts when I leave the app and comeback later, so that I can keep using the app over time

---

## Features

- [ ] Map
- [ ] GeoLocation
- [ ] Form input running data
- [ ] Form input cycling data
- [ ] Display workout List
- [ ] Display workout in the map
- [ ] Store workouts
- [ ] On page load restore store data workouts

## Flowchart

### Page Load

- async Get current location coordinates
- Render map on current Location
- User click on map
- Render workout Form
- User submits new work out
  - render workout on map
  - render workout on list
  - Store work out

### Page Load with Storage Data

- Load workouts from storage
  - render workout on map
  - render workout on list
  - async Get current location coordinates
- Render map on current Location
- User click on map
- Render workout Form
- User submits new work out
  - render workout on map
  - render workout on list
  - Store work out
