# Reservation

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Scenario

Henry has two kinds of users, **providers** and **clients**. Providers have a schedule where they are available to see clients. Clients want to book time, in advance, on that schedule.

**Providers**

- Have an id.
- Have a schedule
  - On Friday the 13th of August, I want to work between 8am and 3pm.

**Clients**

- Have an id.
- Want to reserve a 15m time ‘slot’ from a providers schedule.
  - Reservations expire after 30 mins if not confirmed.
  - Reservations must be made at least 24 hours in advance.
- Want to be able to confirm a reservation.

## Task

Build the front end for a mobile web application that covers as many of the following as possible in the time allotted:

- Allows providers to submit times they’d like to work on the schedule.
- Allows clients to list available slots.
- Allows clients to reserve an available slot.
- Allows clients to confirm their reservation.

While you may use whichever toolset you think is reasonable, it should include React.

## Assumptions

Assume the API is being worked on in parallel and for the time being you could create a mock API or just hardcoded data from a file.

## Evaluation

This will be evaluated similar to a real-world submission, including:

- Does the code solve the business problem?
- What trade-offs were made, how wise are they?
- How clean/well structured is the code?
- What ‘extra’ factors are there, that show exceptional talent?
