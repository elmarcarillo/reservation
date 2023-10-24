# Reservation

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Scenario

Henry has two kinds of users, **providers** and **clients**. Providers have a schedule where they are available to see clients. Clients want to book time, in advance, on that schedule.

**Providers**

- [x] Have an id.
- [x] Have a schedule
  - On Friday the 13th of August, I want to work between 8am and 3pm.

**Clients**

- [x] Have an id.
- [x] Want to reserve a 15m time ‘slot’ from a providers schedule.
  - [ ] Reservations expire after 30 mins if not confirmed. (Not built)
  - [x] Reservations must be made at least 24 hours in advance.
- [x] Want to be able to confirm a reservation.

## What's Built
- Bottom Nav to toggle between client and provider views
- Client View
	- Ability to make reservations.
		- Select, date, start time and provider at top nav.
	- Toggle between clients (at bottom nav) 
	- Ability to confirm reservations.
		- Click on reservation and confirm button appears at top.
		- Confirmed reservation apear in bold.
	- NOT BUILT
		- Expired Reservations after 30 min.	
- Provider View
	- Ability to add schedules
	- Toggle between different providers (at bottom nav) 
