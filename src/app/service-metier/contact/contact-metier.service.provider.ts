import { 
    ContactCudMetierServiceACI,
    ContactCudMetierService ,    
    ContactCudMetierMockService,
    ContactReadMetierServiceACI,    
    ContactReadMetierService,    
    ContactReadMetierMockService    
} from ".";

export let ContactMetierServiceProviders = [
    { provide: ContactCudMetierServiceACI, useClass: ContactCudMetierService },
    { provide: ContactReadMetierServiceACI, useClass: ContactReadMetierService }
];

export let ContactMetierMockServiceProviders = [
    { provide: ContactCudMetierServiceACI, useClass: ContactCudMetierMockService },
    { provide: ContactReadMetierServiceACI, useClass: ContactReadMetierMockService }
];