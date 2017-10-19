import { 
    ContactCudApplicatifServiceACI,
    ContactCudApplicatifService ,    
    ContactCudApplicatifMockService,
    ContactReadApplicatifServiceACI,    
    ContactReadApplicatifService,    
    ContactReadApplicatifMockService    
} from ".";

export let ContactApplicatifServiceProviders = [
    { provide: ContactCudApplicatifServiceACI, useClass: ContactCudApplicatifService },
    { provide: ContactReadApplicatifServiceACI, useClass: ContactReadApplicatifService }
];

export let ContactApplicatifMockServiceProviders = [
    { provide: ContactCudApplicatifServiceACI, useClass: ContactCudApplicatifMockService },
    { provide: ContactReadApplicatifServiceACI, useClass: ContactReadApplicatifMockService }
];




