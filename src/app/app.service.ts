import { Injectable } from '@angular/core';

export class Appointment {
  text: string;
  personId: number;
  startDate: Date;
  endDate: Date;
}
export class Person {
  text: string;
  id: number;
  color: string;
  age: number;
  discipline: string;
}
const appointments = [
  {
    text: 'Website Re-Design Plan',
    personId: 2,
    startDate: new Date('2023-02-08T10:00:00.000Z'),
    endDate: new Date('2023-02-08T12:30:00.000Z'),
  },
  {
    text: 'Book Flights to San Fran for Sales Trip',
    personId: 1,
    startDate: new Date('2023-02-07T17:30:00.000Z'),
    endDate: new Date('2023-02-07T18:00:00.000Z'),
  },
  {
    text: 'Daily Review',
    personId: 2,
    startDate: new Date('2023-02-06T09:30:00.000Z'),
    endDate: new Date('2023-02-06T10:00:00.000Z'),
    recurrenceRule: 'FREQ=DAILY;BYDAY=TU,TH;UNTIL=20231224',
  },
  {
    text: 'Migration Project Sync',
    personId: 1,
    startDate: new Date('2023-02-06T16:30:00.000Z'),
    endDate: new Date('2023-02-06T17:30:00.000Z'),
    recurrenceRule: 'FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20231224',
  },
  {
    text: 'Brainstorm sessions',
    personId: 2,
    startDate: new Date('2023-02-07T10:30:00.000Z'),
    endDate: new Date('2023-02-07T12:30:00.000Z'),
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU;COUNT=12',
  },
  {
    text: 'Funnel Analytics',
    personId: 1,
    startDate: new Date('2023-02-08T15:00:00.000Z'),
    endDate: new Date('2023-02-08T16:30:00.000Z'),
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE;UNTIL=20231224',
  },
  {
    text: 'Customer Workshop',
    personId: 2,
    startDate: new Date('2023-02-09T16:00:00.000Z'),
    endDate: new Date('2023-02-09T17:30:00.000Z'),
  },
  {
    text: 'Monthly Planning',
    personId: 1,
    startDate: new Date('2023-02-10T12:00:00.000Z'),
    endDate: new Date('2023-02-10T17:13:00.000Z'),
  },
];

const personData = [
  {
    text: 'John',
    id: 1,
    color: '#fcb65e',
    age: 27,
    discipline: 'ABS, Fitball, StepFit',
  },
  {
    text: 'Jane',
    id: 2,
    color: '#e18e92',
    age: 25,
    discipline: 'ABS, Fitball, StepFit',
  },
];

@Injectable()
export class AppService {
  getAppointments(): any {
    return appointments;
  }
  getPersons(): any {
    return personData;
  }
}
