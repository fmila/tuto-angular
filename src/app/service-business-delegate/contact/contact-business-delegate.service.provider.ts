import { 
    ContactCudBusinessDelegateServiceACI,
    ContactCudBusinessDelegateService ,    
    ContactCudBusinessDelegateMockService,
    ContactReadBusinessDelegateServiceACI,    
    ContactReadBusinessDelegateService,    
    ContactReadBusinessDelegateMockService    
} from ".";

export let ContactBusinessDelegateServiceProviders = [
    { provide: ContactCudBusinessDelegateServiceACI, useClass: ContactCudBusinessDelegateService },
    { provide: ContactReadBusinessDelegateServiceACI, useClass: ContactReadBusinessDelegateService }
];

export let ContactBusinessDelegateMockServiceProviders = [
    { provide: ContactCudBusinessDelegateServiceACI, useClass: ContactCudBusinessDelegateMockService },
    { provide: ContactReadBusinessDelegateServiceACI, useClass: ContactReadBusinessDelegateMockService }
];