//selectdata
interface Countryoptions1 {
    value: string;
    label: string;
}
export const Languageoptions: Countryoptions1[] = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Hindi', label: 'Hindi' },

];

export const Countryoptions: Countryoptions1[] = [
    { value: 'Usa', label: 'Usa' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Dubai', label: 'Dubai' },

];

export const MaxLimitoptions: Countryoptions1[] = [
    { value: "3 Attempts", label: "3 Attempts" },
    { value: "5 Attempts", label: "5 Attempts" },
    { value: "10 Attempts", label: "10 Attempts" },
    { value: "20 Attempts", label: "20 Attempts" },

];
export const Accountoptions: Countryoptions1[] = [
    { value: "1 Day", label: "1 Day" },
    { value: "1 Hour", label: "1 Hour" },
    { value: "1 Month", label: "1 Month" },
    { value: "1 Year", label: "1 Year" },

];

export const Maximumoptions: Countryoptions1[] = [
    { value: "10", label: "10" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
    { value: "200", label: "200" },

];

interface devices {
    name: string;
    location: string;
    date: string;
    icon: string;
    id: number;
}

export const Devices: devices[] = [
    { id: 1, name: "Mobile-LG-1023", location: "Manchester, UK", date: "Nov 30, 04:45PM", icon: "phone", },
    { id: 2, name: "Lenovo-1291203", location: "England, UK", date: "Aug 12, 12:25PM", icon: "laptop", },
    { id: 3, name: "Macbook-Suzika", location: "Brightoon, UK", date: "Jul 18, 8:34AM", icon: "laptop", },
    { id: 4, name: "Apple-Desktop", location: "Darlington, UK", date: "Jan 14, 11:14AM", icon: "pc-display-horizontal", },
];

interface settings {
    title: string;
    description: string;
    icon: string;
    time: string;
}

export const settings: settings[] = [
    {
        title: "Daily Sending Limit",
        description: "Specify the maximum number of emails you can send.",
        icon: "bi-envelope",
        time: "10:30AM-12:30PM",
    },
    {
        title: "Signature",
        description: "Add an email signature that will be shown at the end of every mail.",
        icon: "bi-journal-medical",
        time: "9:00AM-1:30PM",
    },
    {
        title: "Custom Tracking Domain",
        description: "See up to 20% improvement in deliverability.",
        icon: "bi-send",
        time: "10:00AM-6:30PM",
    },
    {
        title: "Email Warm-up",
        description: "Launch a warm-up campaign to improve inbox placement and sender reputation.",
        icon: "bi-fire",
        time: "N/A",
    }
];
