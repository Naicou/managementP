# managementP
hallintajärjestelmä


phpmyadmin

DB STRUCTURE
EVENTS: 
 -event name
 -description
 -date
 -time
 -tag (1, 2, 3...) AUTO

USERS:
 -email
 -password
 -tag (1, 2, 3...) AUTO

ENROLMENT:
 - KEY ( EVENTS TAG)
 - ENROLLED

EXAMPLE
EVENT-HAI  ENROLLED
(12)       total(2) (55)(60)

