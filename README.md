# managementP
hallintajärjestelmä


react + phpmyadmin

DB STRUCTURE
EVENTS: 
 -event_id (1, 2, 3...) AUTO
 -event name
 -description
 -date
 -time
 

USERS:
 -user_id (1, 2, 3...) AUTO
 -email
 -password
 

ENROLMENT:
 - KEY ( EVENTS ID)
 - ENROLLED

EXAMPLE of enrolment
EVENT-HAI  ENROLLED
(12)       (55)(60)



