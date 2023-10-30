import AirDatepicker from 'air-datepicker'

const date = new AirDatepicker('.date-widjet');
const datetime = new AirDatepicker('.datetime-widjet', {
    timepicker: true,
    timeFormat: 'HH:mm',
    minHours: 9,
    maxHours: 24,
    minutesStep: 5
});
