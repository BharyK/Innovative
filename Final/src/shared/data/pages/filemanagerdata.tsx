import type { ReactNode } from "react"

export const FileManagerSeries = [35, 34, 26, 29]
export const FileManagerOptions = {
  labels: ["Media", "Downloads", "Apps", "Documents"],
  chart: {
    height: 220,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    width: 2,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '80%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            offsetY: 3,
          },
          value: {
            show: true,
            fontSize: '28px',
            fontWeight: 600,
            color: undefined,
            offsetY: -35,
            formatter: function (val: number) {
              return val + "%"
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Used of 256 GB',
            fontSize: '12px',
            fontWeight: 400,
          }

        }
      }
    }
  },
  grid: {
    padding: {
      bottom: -100
    }
  },
  colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9)", "rgba(253, 73, 99, 0.9)", "rgba(255, 169, 9, 0.9)"],
}


const ImagesIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z" opacity=".8" fill="#fff" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" /></svg>
const VideosIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17h18V5H3v12zM9 7l7 4-7 4V7z" opacity=".8" fill="#fff" /><path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" /></svg>
const AudioIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>    <rect fill="none" height="24" width="24" /></g><g>    <g>        <rect height="4" opacity=".8" fill="#fff" width="2" x="5" y="15" />        <rect height="4" opacity=".3" fill="#fff" width="2" x="17" y="15" />        <path d="M12,3c-4.97,0-9,4.03-9,9v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h4c1.1,0,2-0.9,2-2v-7 C21,7.03,16.97,3,12,3z M7,15v4H5v-4H7z M19,19h-2v-4h2V19z" />    </g></g></svg>
const AppsIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>    <rect fill="none" height="24" width="24" /></g><g>    <g>        <rect height="4" opacity=".8" fill="#fff" width="4" x="5" y="5" />        <rect height="4" opacity=".8" fill="#fff" width="4" x="5" y="15" />        <rect height="4" opacity=".8" fill="#fff" width="4" x="15" y="15" />        <rect height="4" opacity=".8" fill="#fff" width="4" x="15" y="5" />        <path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />        <path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />        <path d="M13,21h8v-8h-8V21z M15,15h4v4h-4V15z" />        <path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />    </g></g></svg>
const DocumentsIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g>    <rect fill="none" height="24" width="24" y="0"></rect>    <path d="M5,5v14h14V5H5z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" opacity=".3"></path>    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M17,13H7v-2h10 V13z M17,9H7V7h10V9z M14,17H7v-2h7V17z"></path></g></svg>
const VideosIcon1 = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 8h10v8H5z" opacity=".3"></path><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"></path></svg>
const MediaDataIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M97.66,114.34,147.31,164h0L173,138.34a8,8,0,0,1,11.31,0L224,178.06V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V168.69l54.34-54.35A8,8,0,0,1,97.66,114.34Z" opacity="0.2" /><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><circle cx="156" cy="100" r="12" /><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const DownloadsDataIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2" /><path d="M184,128h40a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="128" y1="24" x2="128" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="80 80 128 128 176 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><circle cx="188" cy="168" r="12" /></svg>
const AppsDataIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="48" y="48" width="64" height="64" rx="8" opacity="0.2" /><rect x="144" y="48" width="64" height="64" rx="8" opacity="0.2" /><rect x="48" y="144" width="64" height="64" rx="8" opacity="0.2" /><rect x="144" y="144" width="64" height="64" rx="8" opacity="0.2" /><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const DocumentsDataIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const VideosfileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const ImagesfileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" opacity="0.2" /><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const ArchivesfileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M168,192h16a20,20,0,0,0,0-40H168v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="128" y1="152" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="56 152 88 152 56 208 88 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const Archives1fileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" opacity="0.2" /><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M128,152a32.5,32.5,0,0,1,0,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const DocumentsfileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="216 152 184 152 184 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="208" y1="184" x2="184" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M48,192H64a20,20,0,0,0,0-40H48v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M112,152v56h16a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>

export interface QuickAccessItem {
  id: number;
  title: string;
  usage: string;
  size: string;
  files: string;
  svgIcon: ReactNode;
  avatarClass: string;
}
export const QuickAccess: QuickAccessItem[] = [
  { id: 1, title: 'Images', usage: '26% Used', size: '36.65GB', files: '357 files', svgIcon: ImagesIcon, avatarClass: 'primary' },
  { id: 2, title: 'Videos', usage: '18% Used', size: '18.12GB', files: '224 files', svgIcon: VideosIcon, avatarClass: 'secondary' },
  { id: 3, title: 'Audio', usage: '33% Used', size: '38.55GB', files: '455 files', svgIcon: AudioIcon, avatarClass: 'danger' },
  { id: 4, title: 'Apps', usage: '51% Used', size: '65.23GB', files: '16 files', svgIcon: AppsIcon, avatarClass: 'warning' },
];

interface FolderType {
  id: number;
  title: string;
  svgContent: ReactNode;
  files: string;
  bgClass: string;
}
export const Folders: FolderType[] = [
  { id: 1, title: 'Images', svgContent: ImagesIcon, files: '345 Files', bgClass: 'primary', },
  { id: 2, title: 'Audio', svgContent: AudioIcon, files: '123 Files', bgClass: 'secondary', },
  { id: 3, title: 'Documents', svgContent: DocumentsIcon, files: '32 Files', bgClass: 'danger', },
  { id: 4, title: 'Videos', svgContent: VideosIcon1, files: '167 Files', bgClass: 'warning', },
  { id: 5, title: 'Apps', svgContent: AppsIcon, files: '23 Files', bgClass: 'info', },
];

interface RecentFileType {
  id: number;
  fileName: string;
  svgContent: ReactNode;
  category: string;
  size: string;
  date: string;
  avatarClass: string;
  rowClass?: string;
}
export const RecentFiles: RecentFileType[] = [
  { id: 1, fileName: 'VID-00292312-SPK823.mp4', svgContent: VideosfileIcon, category: 'Videos', size: '87MB', date: '22,Nov 2024', avatarClass: 'primary', },
  { id: 2, fileName: 'IMG-09123878-SPK734.jpeg', svgContent: ImagesfileIcon, category: 'Images', size: '1.35MB', date: '25,Nov 2024', avatarClass: 'secondary', },
  { id: 3, fileName: 'AMB-2012.zip', svgContent: ArchivesfileIcon, category: 'Archives', size: '422KB', date: '23,Nov 2024', avatarClass: 'warning', rowClass: 'table-active' },
  { id: 4, fileName: 'AUD-1002-2012.mp3', svgContent: Archives1fileIcon, category: 'Archives', size: '422KB', date: '23,Nov 2024', avatarClass: 'danger', },
  { id: 5, fileName: 'Document-02.pdf', svgContent: DocumentsfileIcon, category: 'Documents', size: '1.69MB', date: '2,Dec 2024', avatarClass: 'info', },
];

interface FileCategoryType {
  id: number;
  category: string;
  svgContent: ReactNode;
  files: string;
  storage: string;
  mainCardIconClass: string;
  listItemClass?: string;
}
export const FileCategories: FileCategoryType[] = [
  { id: 1, category: 'Media', svgContent: MediaDataIcon, files: '2,872 files', storage: '35GB Used', mainCardIconClass: 'primary', listItemClass: 'mb-2' },
  { id: 2, category: 'Downloads', svgContent: DownloadsDataIcon, files: '644 files', storage: '34GB Used', mainCardIconClass: 'secondary', listItemClass: 'mb-2' },
  { id: 3, category: 'Apps', svgContent: AppsDataIcon, files: '64 files', storage: '26GB Used', mainCardIconClass: 'danger', listItemClass: 'mb-2' },
  { id: 4, category: 'Documents', svgContent: DocumentsDataIcon, files: '3,271 files', storage: '29GB Used', mainCardIconClass: 'warning', },
];