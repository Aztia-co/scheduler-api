export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface AvailabilityRequest {
  userId: string;
  availability: AvailabilitySlot[];
}
