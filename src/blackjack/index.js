import { eventHandler, visualElementsHandler } from './usecases';

const elementosHTML = visualElementsHandler();
eventHandler( elementosHTML );