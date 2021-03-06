import { TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarService
      ],
      imports: [
        HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should get calendar.service', () => {
    service = TestBed.get(CalendarService);
  });
});
