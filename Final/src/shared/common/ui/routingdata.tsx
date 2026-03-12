import { lazy, type JSX } from "react";
const Medical = lazy(() => import("../../../components/dashboards/medical/medical"));
const PosSystem = lazy(() => import("../../../components/dashboards/pos-system/pos-system"));
const School = lazy(() => import("../../../components/dashboards/school/school"));
const SocialMedia = lazy(() => import("../../../components/dashboards/social-media/social-media"));
const Customers = lazy(() => import("../../../components/apps/ecommerce/customers/customers"));
const Search = lazy(() => import("../../../components/pages/search/search"));
const ProfileSettingd = lazy(() => import("../../../components/pages/profile-settings/profile-settings"));
const FormAdvanced = lazy(() => import("../../../components/forms/form-advanced/form-advanced"));
const FormWizards = lazy(() => import("../../../components/forms/form-wizards/form-wizards"));
const LinksInteractions = lazy(() => import("../../../components/ui-elements/links-interactions/links-interactions"));
const MediaPlayer = lazy(() => import("../../../components/advanced-ui/media-player/media-player"));
const Ribbons = lazy(() => import("../../../components/advanced-ui/ribbons/ribbons"));
const SortableJs = lazy(() => import("../../../components/advanced-ui/sortable-js/sortable-js"));
const Tour = lazy(() => import("../../../components/advanced-ui/tour/tour"));
const CssGrid = lazy(() => import("../../../components/utilities/css-grid/css-grid"));
const PloarareaCharts = lazy(() => import("../../../components/charts/apex-charts/polararea-charts/polararea-charts"));
const Analytics = lazy(() => import("../../../components/dashboards/analytics/analytics"));
const Crm = lazy(() => import("../../../components/dashboards/crm/crm"));
const Ecommerce = lazy(() => import("../../../components/dashboards/ecommerce/ecommerce"));
const Hrm = lazy(() => import("../../../components/dashboards/hrm/hrm"));
const Jobs = lazy(() => import("../../../components/dashboards/jobs/jobs"));
const Nft = lazy(() => import("../../../components/dashboards/nft/nft"));
const Sales = lazy(() => import("../../../components/dashboards/sales/sales"));
const Crypto = lazy(() => import("../../../components/dashboards/crypto/crypto"));
const Projects = lazy(() => import("../../../components/dashboards/projects/projects"));
const Courses = lazy(() => import("../../../components/dashboards/courses/courses"));
const Stocks = lazy(() => import("../../../components/dashboards/stocks/stocks"));
const Podcast = lazy(() => import("../../../components/dashboards/podcast/podcast"));
const Blog = lazy(() => import("../../../components/pages/blog/blog/blog"));
const BlogDetails = lazy(() => import("../../../components/pages/blog/blog-details/blog-details"));
const CreateBlog = lazy(() => import("../../../components/pages/blog/create-blog/create-blog"));
const Chat = lazy(() => import("../../../components/pages/chat/chat"));
const Contacts = lazy(() => import("../../../components/apps/crm/contacts/contacts"));
const AddProduct = lazy(() => import("../../../components/apps/ecommerce/add-products/add-products"));
const Cart = lazy(() => import("../../../components/apps/ecommerce/cart/cart"));
const Checkout = lazy(() => import("../../../components/apps/ecommerce/checkout/checkout"));
const EditProducts = lazy(() => import("../../../components/apps/ecommerce/edit-products/edit-products"));
const OrderDetails = lazy(() => import("../../../components/apps/ecommerce/order-details/order-details"));
const Orders = lazy(() => import("../../../components/apps/ecommerce/orders/orders"));
const Products = lazy(() => import("../../../components/apps/ecommerce/products/products"));
const ProductDetails = lazy(() => import("../../../components/apps/ecommerce/product-details/product-details"));
const ProductsList = lazy(() => import("../../../components/apps/ecommerce/products-list/products-list"));
const Wishlist = lazy(() => import("../../../components/apps/ecommerce/wishlist/wishlist"));
const MailApp = lazy(() => import("../../../components/pages/email/mail-app/mail-app"));
const MailSettings = lazy(() => import("../../../components/pages/email/mail-settings/mail-settings"));
const Empty = lazy(() => import("../../../components/pages/empty/empty"));
const Faqs = lazy(() => import("../../../components/pages/faqs/faqs"));
const FileManager = lazy(() => import("../../../components/pages/file-manager/file-manager"));
const CreateInvoice = lazy(() => import("../../../components/pages/invoice/create-invoice/create-invoice"));
const InvoiceDetails = lazy(() => import("../../../components/pages/invoice/invoice-details/invoice-details"));
const InvoiceList = lazy(() => import("../../../components/pages/invoice/invoice-list/invoice-list"));
const Pricing = lazy(() => import("../../../components/pages/pricing/pricing"));
const Profile = lazy(() => import("../../../components/pages/profile/profile"));
const Reviews = lazy(() => import("../../../components/pages/reviews/reviews"));
const Team = lazy(() => import("../../../components/pages/team/team"));
const TermsConditions = lazy(() => import("../../../components/pages/terms-conditions/terms-conditions"));
const Timeline = lazy(() => import("../../../components/pages/timeline/timeline"));
const ToDoList = lazy(() => import("../../../components/pages/to-do-list/to-do-list"));
const FullCalendars = lazy(() => import("../../../components/apps/full-calendar/full-calendar"));
const Gallery = lazy(() => import("../../../components/apps/gallery/gallery"));
const SweetAlerts = lazy(() => import("../../../components/apps/sweet-alerts/sweet-alerts"));
const ProjectList = lazy(() => import("../../../components/apps/projects/project-list/project-list"));
const ProjectOverview = lazy(() => import("../../../components/apps/projects/project-overview/project-overview"));
const CreateProject = lazy(() => import("../../../components/apps/projects/create-project/create-project"));
const Kanbanboard = lazy(() => import("../../../components/apps/task/kanbanboard/kanbanboard"));
const TaskDetails = lazy(() => import("../../../components/apps/task/task-details/task-details"));
const JobDetails = lazy(() => import("../../../components/apps/jobs/job-details/job-details"));
const SearchCompany = lazy(() => import("../../../components/apps/jobs/search-company/search-company"));
const SearchJobs = lazy(() => import("../../../components/apps/jobs/search-jobs/search-jobs"));
const JobPost = lazy(() => import("../../../components/apps/jobs/job-post/job-post"));
const JobList = lazy(() => import("../../../components/apps/jobs/jobs-list/jobs-list"));
const SearchCandidate = lazy(() => import("../../../components/apps/jobs/search-candidate/search-candidate"));
const CandidateDetails = lazy(() => import("../../../components/apps/jobs/candidate-details/candidate-details"));
const Marketplace = lazy(() => import("../../../components/apps/nft/marketplace/marketplace"));
const NftDetails = lazy(() => import("../../../components/apps/nft/nft-details/nft-details"));
const CreateNft = lazy(() => import("../../../components/apps/nft/create-nft/create-nft"));
const WalletIntegration = lazy(() => import("../../../components/apps/nft/wallet-integration/wallet-integration"));
const LiveAuction = lazy(() => import("../../../components/apps/nft/live-auction/live-auction"));
const Companies = lazy(() => import("../../../components/apps/crm/companies/companies"));
const Deals = lazy(() => import("../../../components/apps/crm/deals/deals"));
const Leads = lazy(() => import("../../../components/apps/crm/leads/leads"));
const Transactions = lazy(() => import("../../../components/apps/crypto/transactions/transactions"));
const CurrencyExchange = lazy(() => import("../../../components/apps/crypto/currency-exchange/currency-exchange"));
const BuySell = lazy(() => import("../../../components/apps/crypto/buy-sell/buy-sell"));
const Marketcap = lazy(() => import("../../../components/apps/crypto/marketcap/marketcap"));
const Wallet = lazy(() => import("../../../components/apps/crypto/wallet/wallet"));
const Alerts = lazy(() => import("../../../components/ui-elements/alerts/alerts"));
const Badge = lazy(() => import("../../../components/ui-elements/badge/badge"));
const Breadcrumbs = lazy(() => import("../../../components/ui-elements/breadcrumb/breadcrumb"));
const Buttons = lazy(() => import("../../../components/ui-elements/buttons/buttons"));
const ButtonGroups = lazy(() => import("../../../components/ui-elements/button-group/button-group"));
const Cards = lazy(() => import("../../../components/ui-elements/cards/cards"));
const Dropdowns = lazy(() => import("../../../components/ui-elements/dropdowns/dropdowns"));
const ImagesFigures = lazy(() => import("../../../components/ui-elements/images-figures/images-figures"));
const ListGroups = lazy(() => import("../../../components/ui-elements/list-group/list-group"));
const NavsTabs = lazy(() => import("../../../components/ui-elements/navs-tabs/navs-tabs"));
const ObjectFit = lazy(() => import("../../../components/ui-elements/object-fit/object-fit"));
const Paginations = lazy(() => import("../../../components/ui-elements/pagination/pagination"));
const Popovers = lazy(() => import("../../../components/ui-elements/popovers/popovers"));
const Progress = lazy(() => import("../../../components/ui-elements/progress/progress"));
const Spinners = lazy(() => import("../../../components/ui-elements/spinners/spinners"));
const Toasts = lazy(() => import("../../../components/ui-elements/toasts/toasts"));
const Tooltips = lazy(() => import("../../../components/ui-elements/tooltips/tooltips"));
const Typography = lazy(() => import("../../../components/ui-elements/typography/typography"));
const Avatars = lazy(() => import("../../../components/utilities/avatars/avatars"));
const Borders = lazy(() => import("../../../components/utilities/borders/borders"));
const Breakpoints = lazy(() => import("../../../components/utilities/breakpoints/breakpoints"));
const Colors = lazy(() => import("../../../components/utilities/colors/colors"));
const Columns = lazy(() => import("../../../components/utilities/columns/columns"));
const Flex = lazy(() => import("../../../components/utilities/flex/flex"));
const Gutters = lazy(() => import("../../../components/utilities/gutters/gutters"));
const Helpers = lazy(() => import("../../../components/utilities/helpers/helpers"));
const Position = lazy(() => import("../../../components/utilities/position/position"));
const AdditionalContent = lazy(() => import("../../../components/utilities/additional-content/additional-content"));
const Inputs = lazy(() => import("../../../components/forms/form-elements/inputs/inputs"));
const ChecksRadios = lazy(() => import("../../../components/forms/form-elements/checks-radios/checks-radios"));
const InputGroups = lazy(() => import("../../../components/forms/form-elements/input-group/input-group"));
const FormSelect = lazy(() => import("../../../components/forms/form-elements/form-select/form-select"));
const RangeSlider = lazy(() => import("../../../components/forms/form-elements/range-slider/range-slider"));
const InputMasks = lazy(() => import("../../../components/forms/form-elements/input-masks/input-masks"));
const FileUploads = lazy(() => import("../../../components/forms/form-elements/file-uploads/file-uploads"));
const DateTimePicker = lazy(() => import("../../../components/forms/form-elements/date-time-picker/date-time-picker"));
const FloatingLabels = lazy(() => import("../../../components/forms/floating-labels/floating-labels"));
const FormLayouts = lazy(() => import("../../../components/forms/form-layouts/form-layouts"));
const QuillEditor = lazy(() => import("../../../components/forms/sun-editor/sun-editor"));
const Validation = lazy(() => import("../../../components/forms/validation/validation"));
const Select2 = lazy(() => import("../../../components/forms/select2/select2"));
const AccordionsCollapse = lazy(() => import("../../../components/advanced-ui/accordions-collapse/accordions-collapse"));
const Carousel = lazy(() => import("../../../components/advanced-ui/carousel/carousel"));
const DraggableCards = lazy(() => import("../../../components/advanced-ui/draggable-cards/draggable-cards"));
const ModalsCloses = lazy(() => import("../../../components/advanced-ui/modals-closes/modals-closes"));
const Navbars = lazy(() => import("../../../components/advanced-ui/navbar/navbar"));
const Offcanvases = lazy(() => import("../../../components/advanced-ui/offcanvas/offcanvas"));
const Placeholders = lazy(() => import("../../../components/advanced-ui/placeholders/placeholders"));
const Ratings = lazy(() => import("../../../components/advanced-ui/ratings/ratings"));
const SwiperJs = lazy(() => import("../../../components/advanced-ui/swiper-js/swiper-js"));
const Widgets = lazy(() => import("../../../components/widgets/widgets"));
const Tables = lazy(() => import("../../../components/tables/tables/tables"));
const GridjsTables = lazy(() => import("../../../components/tables/gridjs/gridjs"));
const DataTables = lazy(() => import("../../../components/tables/data-tables/data-tables"));
const AreaCharts = lazy(() => import("../../../components/charts/apex-charts/area-charts/area-charts"));
const BarCharts = lazy(() => import("../../../components/charts/apex-charts/bar-charts/bar-charts"));
const BoxplotCharts = lazy(() => import("../../../components/charts/apex-charts/boxplot-charts/boxplot-charts"));
const BubbleCharts = lazy(() => import("../../../components/charts/apex-charts/bubble-charts/bubble-charts"));
const CandlestickCharts = lazy(() => import("../../../components/charts/apex-charts/candlestick-charts/candlestick-charts"));
const ColumnCharts = lazy(() => import("../../../components/charts/apex-charts/column-charts/column-charts"));
const FunnelCharts = lazy(() => import("../../../components/charts/apex-charts/funnel-charts/funnel-charts"));
const HeatmapCharts = lazy(() => import("../../../components/charts/apex-charts/heatmap-charts/heatmap-charts"));
const LineCharts = lazy(() => import("../../../components/charts/apex-charts/line-charts/line-charts"));
const MixedCharts = lazy(() => import("../../../components/charts/apex-charts/mixed-charts/mixed-charts"));
const PieCharts = lazy(() => import("../../../components/charts/apex-charts/pie-charts/pie-charts"));
const RadarCharts = lazy(() => import("../../../components/charts/apex-charts/radar-charts/radar-charts"));
const RadialbarCharts = lazy(() => import("../../../components/charts/apex-charts/radialbar-charts/radialbar-charts"));
const RangeAreaCharts = lazy(() => import("../../../components/charts/apex-charts/range-area-charts/range-area-charts"));
const ScatterCharts = lazy(() => import("../../../components/charts/apex-charts/scatter-charts/scatter-charts"));
const TimelineCharts = lazy(() => import("../../../components/charts/apex-charts/timeline-charts/timeline-charts"));
const TreemapCharts = lazy(() => import("../../../components/charts/apex-charts/treemap-charts/treemap-charts"));
const ChartjsCharts = lazy(() => import("../../../components/charts/chartjs-charts/chartjs-charts"));
const EchartsCharts = lazy(() => import("../../../components/charts/echarts-charts/echarts-charts"));
const LeafletMaps = lazy(() => import("../../../components/maps/leaflet-maps/leaflet-maps"));
const PigeonMaps = lazy(() => import("../../../components/maps/pigeon-maps/pigeon-maps"));
const Icons = lazy(() => import("../../../components/icons/icons"));
const ColorPickers = lazy(() => import("../../../components/forms/form-elements/color-picker/color-picker"));



export interface routeType {
    id: number
    path: string
    element: JSX.Element
}

export const RouteData: routeType[] = [

    { id: 1, path: `${import.meta.env.BASE_URL}dashboards/sales`, element: <Sales /> },
    { id: 2, path: `${import.meta.env.BASE_URL}dashboards/analytics`, element: <Analytics /> },
    { id: 3, path: `${import.meta.env.BASE_URL}dashboards/summary`, element: <Ecommerce /> },
    { id: 4, path: `${import.meta.env.BASE_URL}dashboards/revenue`, element: <Crm /> },
    { id: 5, path: `${import.meta.env.BASE_URL}dashboards/hrm`, element: <Hrm /> },
    { id: 6, path: `${import.meta.env.BASE_URL}dashboards/nft`, element: <Nft /> },
    { id: 7, path: `${import.meta.env.BASE_URL}dashboards/crypto`, element: <Crypto /> },
    { id: 8, path: `${import.meta.env.BASE_URL}dashboards/jobs`, element: <Jobs /> },
    { id: 9, path: `${import.meta.env.BASE_URL}dashboards/expenses`, element: <Projects /> },
    { id: 10, path: `${import.meta.env.BASE_URL}dashboards/courses`, element: <Courses /> },
    { id: 11, path: `${import.meta.env.BASE_URL}dashboards/stocks`, element: <Stocks /> },
    { id: 12, path: `${import.meta.env.BASE_URL}dashboards/medical`, element: <Medical /> },
    { id: 13, path: `${import.meta.env.BASE_URL}dashboards/pos-system`, element: <PosSystem /> },
    { id: 14, path: `${import.meta.env.BASE_URL}dashboards/school`, element: <School /> },
    { id: 15, path: `${import.meta.env.BASE_URL}dashboards/expensesOne`, element: <Podcast /> },
    { id: 16, path: `${import.meta.env.BASE_URL}dashboards/social-media`, element: <SocialMedia /> },

    { id: 17, path: `${import.meta.env.BASE_URL}apps/ecommerce/add-products`, element: <AddProduct /> },
    { id: 18, path: `${import.meta.env.BASE_URL}apps/ecommerce/cart`, element: <Cart /> },
    { id: 19, path: `${import.meta.env.BASE_URL}apps/ecommerce/checkout`, element: <Checkout /> },
    { id: 20, path: `${import.meta.env.BASE_URL}apps/ecommerce/edit-product`, element: <EditProducts /> },
    { id: 21, path: `${import.meta.env.BASE_URL}apps/ecommerce/customers`, element: <Customers /> },
    { id: 22, path: `${import.meta.env.BASE_URL}apps/ecommerce/order-details`, element: <OrderDetails /> },
    { id: 23, path: `${import.meta.env.BASE_URL}apps/ecommerce/orders`, element: <Orders /> },
    { id: 24, path: `${import.meta.env.BASE_URL}apps/ecommerce/products`, element: <Products /> },
    { id: 25, path: `${import.meta.env.BASE_URL}apps/ecommerce/product-details`, element: <ProductDetails /> },
    { id: 26, path: `${import.meta.env.BASE_URL}apps/ecommerce/products-list`, element: <ProductsList /> },
    { id: 27, path: `${import.meta.env.BASE_URL}apps/ecommerce/wishlist`, element: <Wishlist /> },
    { id: 28, path: `${import.meta.env.BASE_URL}apps/full-calendar`, element: <FullCalendars /> },
    { id: 29, path: `${import.meta.env.BASE_URL}apps/gallery`, element: <Gallery /> },
    { id: 30, path: `${import.meta.env.BASE_URL}apps/sweet-alerts`, element: <SweetAlerts /> },
    { id: 31, path: `${import.meta.env.BASE_URL}apps/projects/project-list`, element: <ProjectList /> },
    { id: 32, path: `${import.meta.env.BASE_URL}apps/projects/project-overview`, element: <ProjectOverview /> },
    { id: 33, path: `${import.meta.env.BASE_URL}apps/projects/create-project`, element: <CreateProject /> },
    { id: 34, path: `${import.meta.env.BASE_URL}apps/task/kanbanboard`, element: <Kanbanboard /> },
    { id: 35, path: `${import.meta.env.BASE_URL}apps/task/task-details`, element: <TaskDetails /> },
    { id: 36, path: `${import.meta.env.BASE_URL}apps/jobs/job-details`, element: <JobDetails /> },
    { id: 37, path: `${import.meta.env.BASE_URL}apps/jobs/search-company`, element: <SearchCompany /> },
    { id: 38, path: `${import.meta.env.BASE_URL}apps/jobs/search-jobs`, element: <SearchJobs /> },
    { id: 39, path: `${import.meta.env.BASE_URL}apps/jobs/job-post`, element: <JobPost /> },
    { id: 40, path: `${import.meta.env.BASE_URL}apps/jobs/joblist`, element: <JobList /> },
    { id: 41, path: `${import.meta.env.BASE_URL}apps/jobs/search-candidate`, element: <SearchCandidate /> },
    { id: 42, path: `${import.meta.env.BASE_URL}apps/jobs/candidate-details`, element: <CandidateDetails /> },
    { id: 43, path: `${import.meta.env.BASE_URL}apps/nft/marketplace`, element: <Marketplace /> },
    { id: 44, path: `${import.meta.env.BASE_URL}apps/nft/nft-details`, element: <NftDetails /> },
    { id: 45, path: `${import.meta.env.BASE_URL}apps/nft/create-nft`, element: <CreateNft /> },
    { id: 46, path: `${import.meta.env.BASE_URL}apps/nft/wallet-integration`, element: <WalletIntegration /> },
    { id: 47, path: `${import.meta.env.BASE_URL}apps/nft/live-auction`, element: <LiveAuction /> },
    { id: 48, path: `${import.meta.env.BASE_URL}apps/crm/contacts`, element: <Contacts /> },
    { id: 49, path: `${import.meta.env.BASE_URL}apps/crm/companies`, element: <Companies /> },
    { id: 50, path: `${import.meta.env.BASE_URL}apps/crm/deals`, element: <Deals /> },
    { id: 51, path: `${import.meta.env.BASE_URL}apps/crm/leads`, element: <Leads /> },
    { id: 52, path: `${import.meta.env.BASE_URL}apps/crypto/transactions`, element: <Transactions /> },
    { id: 53, path: `${import.meta.env.BASE_URL}apps/crypto/currency-exchange`, element: <CurrencyExchange /> },
    { id: 54, path: `${import.meta.env.BASE_URL}apps/crypto/buy-sell`, element: <BuySell /> },
    { id: 55, path: `${import.meta.env.BASE_URL}apps/crypto/marketcap`, element: <Marketcap /> },
    { id: 56, path: `${import.meta.env.BASE_URL}apps/crypto/wallet`, element: <Wallet /> },

    { id: 57, path: `${import.meta.env.BASE_URL}pages/blog/blog`, element: <Blog /> },
    { id: 58, path: `${import.meta.env.BASE_URL}pages/blog/blog-details`, element: <BlogDetails /> },
    { id: 59, path: `${import.meta.env.BASE_URL}pages/blog/create-blog`, element: <CreateBlog /> },
    { id: 60, path: `${import.meta.env.BASE_URL}pages/chat`, element: <Chat /> },
    { id: 61, path: `${import.meta.env.BASE_URL}pages/contact`, element: <Contacts /> },
    { id: 62, path: `${import.meta.env.BASE_URL}pages/email/mail-app`, element: <MailApp /> },
    { id: 63, path: `${import.meta.env.BASE_URL}pages/email/mail-settings`, element: <MailSettings /> },
    { id: 64, path: `${import.meta.env.BASE_URL}pages/empty`, element: <Empty /> },
    { id: 65, path: `${import.meta.env.BASE_URL}pages/faqs`, element: <Faqs /> },
    { id: 66, path: `${import.meta.env.BASE_URL}pages/file-manager`, element: <FileManager /> },
    { id: 67, path: `${import.meta.env.BASE_URL}pages/invoice/create-invoice`, element: <CreateInvoice /> },
    { id: 68, path: `${import.meta.env.BASE_URL}pages/invoice/invoice-details`, element: <InvoiceDetails /> },
    { id: 69, path: `${import.meta.env.BASE_URL}pages/invoice/invoice-list`, element: <InvoiceList /> },
    { id: 70, path: `${import.meta.env.BASE_URL}pages/pricing`, element: <Pricing /> },
    { id: 71, path: `${import.meta.env.BASE_URL}pages/profile`, element: <Profile /> },
    { id: 72, path: `${import.meta.env.BASE_URL}pages/search`, element: <Search /> },
    { id: 73, path: `${import.meta.env.BASE_URL}pages/reviews`, element: <Reviews /> },
    { id: 74, path: `${import.meta.env.BASE_URL}pages/team`, element: <Team /> },
    { id: 75, path: `${import.meta.env.BASE_URL}pages/terms-conditions`, element: <TermsConditions /> },
    { id: 76, path: `${import.meta.env.BASE_URL}pages/profile-settings`, element: <ProfileSettingd /> },
    { id: 77, path: `${import.meta.env.BASE_URL}pages/timeline`, element: <Timeline /> },
    { id: 78, path: `${import.meta.env.BASE_URL}pages/to-do-list`, element: <ToDoList /> },

    { id: 79, path: `${import.meta.env.BASE_URL}forms/form-advanced`, element: <FormAdvanced /> },
    { id: 80, path: `${import.meta.env.BASE_URL}forms/form-elements/inputs`, element: <Inputs /> },
    { id: 81, path: `${import.meta.env.BASE_URL}forms/form-elements/checks-radios`, element: <ChecksRadios /> },
    { id: 82, path: `${import.meta.env.BASE_URL}forms/form-elements/input-group`, element: <InputGroups /> },
    { id: 83, path: `${import.meta.env.BASE_URL}forms/form-elements/form-select`, element: <FormSelect /> },
    { id: 84, path: `${import.meta.env.BASE_URL}forms/form-elements/range-slider`, element: <RangeSlider /> },
    { id: 85, path: `${import.meta.env.BASE_URL}forms/form-elements/input-masks`, element: <InputMasks /> },
    { id: 86, path: `${import.meta.env.BASE_URL}forms/form-elements/file-uploads`, element: <FileUploads /> },
    { id: 87, path: `${import.meta.env.BASE_URL}forms/form-elements/date-time-picker`, element: <DateTimePicker /> },
    { id: 88, path: `${import.meta.env.BASE_URL}forms/form-elements/color-picker`, element: <ColorPickers /> },
    { id: 89, path: `${import.meta.env.BASE_URL}forms/floating-labels`, element: <FloatingLabels /> },
    { id: 90, path: `${import.meta.env.BASE_URL}forms/form-layouts`, element: <FormLayouts /> },
    { id: 91, path: `${import.meta.env.BASE_URL}forms/form-wizards`, element: <FormWizards /> },
    { id: 92, path: `${import.meta.env.BASE_URL}forms/sun-editor`, element: <QuillEditor /> },
    { id: 93, path: `${import.meta.env.BASE_URL}forms/validation`, element: <Validation /> },
    { id: 94, path: `${import.meta.env.BASE_URL}forms/select2`, element: <Select2 /> },

    { id: 95, path: `${import.meta.env.BASE_URL}ui-elements/alerts`, element: <Alerts /> },
    { id: 96, path: `${import.meta.env.BASE_URL}ui-elements/badge`, element: <Badge /> },
    { id: 97, path: `${import.meta.env.BASE_URL}ui-elements/breadcrumb`, element: <Breadcrumbs /> },
    { id: 98, path: `${import.meta.env.BASE_URL}ui-elements/buttons`, element: <Buttons /> },
    { id: 99, path: `${import.meta.env.BASE_URL}ui-elements/button-group`, element: <ButtonGroups /> },
    { id: 100, path: `${import.meta.env.BASE_URL}ui-elements/cards`, element: <Cards /> },
    { id: 101, path: `${import.meta.env.BASE_URL}ui-elements/dropdowns`, element: <Dropdowns /> },
    { id: 102, path: `${import.meta.env.BASE_URL}ui-elements/images-figures`, element: <ImagesFigures /> },
    { id: 103, path: `${import.meta.env.BASE_URL}ui-elements/links-interactions`, element: <LinksInteractions /> },
    { id: 104, path: `${import.meta.env.BASE_URL}ui-elements/list-group`, element: <ListGroups /> },
    { id: 105, path: `${import.meta.env.BASE_URL}ui-elements/navs-tabs`, element: <NavsTabs /> },
    { id: 106, path: `${import.meta.env.BASE_URL}ui-elements/object-fit`, element: <ObjectFit /> },
    { id: 107, path: `${import.meta.env.BASE_URL}ui-elements/pagination`, element: <Paginations /> },
    { id: 108, path: `${import.meta.env.BASE_URL}ui-elements/popovers`, element: <Popovers /> },
    { id: 109, path: `${import.meta.env.BASE_URL}ui-elements/progress`, element: <Progress /> },
    { id: 110, path: `${import.meta.env.BASE_URL}ui-elements/spinners`, element: <Spinners /> },
    { id: 111, path: `${import.meta.env.BASE_URL}ui-elements/toasts`, element: <Toasts /> },
    { id: 112, path: `${import.meta.env.BASE_URL}ui-elements/tooltips`, element: <Tooltips /> },
    { id: 113, path: `${import.meta.env.BASE_URL}ui-elements/typography`, element: <Typography /> },

    { id: 114, path: `${import.meta.env.BASE_URL}advanced-ui/accordions-collapse`, element: <AccordionsCollapse /> },
    { id: 115, path: `${import.meta.env.BASE_URL}advanced-ui/carousel`, element: <Carousel /> },
    { id: 116, path: `${import.meta.env.BASE_URL}advanced-ui/draggable-cards`, element: <DraggableCards /> },
    { id: 117, path: `${import.meta.env.BASE_URL}advanced-ui/media-player`, element: <MediaPlayer /> },
    { id: 118, path: `${import.meta.env.BASE_URL}advanced-ui/modals-closes`, element: <ModalsCloses /> },
    { id: 119, path: `${import.meta.env.BASE_URL}advanced-ui/navbar`, element: <Navbars /> },
    { id: 120, path: `${import.meta.env.BASE_URL}advanced-ui/offcanvas`, element: <Offcanvases /> },
    { id: 121, path: `${import.meta.env.BASE_URL}advanced-ui/placeholders`, element: <Placeholders /> },
    { id: 122, path: `${import.meta.env.BASE_URL}advanced-ui/ribbons`, element: <Ribbons /> },
    { id: 123, path: `${import.meta.env.BASE_URL}advanced-ui/sortable-js`, element: <SortableJs /> },
    { id: 124, path: `${import.meta.env.BASE_URL}advanced-ui/ratings`, element: <Ratings /> },
    { id: 125, path: `${import.meta.env.BASE_URL}advanced-ui/swiper-js`, element: <SwiperJs /> },
    { id: 126, path: `${import.meta.env.BASE_URL}advanced-ui/tour`, element: <Tour /> },

    { id: 127, path: `${import.meta.env.BASE_URL}utilities/avatars`, element: <Avatars /> },
    { id: 128, path: `${import.meta.env.BASE_URL}utilities/borders`, element: <Borders /> },
    { id: 129, path: `${import.meta.env.BASE_URL}utilities/breakpoints`, element: <Breakpoints /> },
    { id: 130, path: `${import.meta.env.BASE_URL}utilities/colors`, element: <Colors /> },
    { id: 131, path: `${import.meta.env.BASE_URL}utilities/columns`, element: <Columns /> },
    { id: 132, path: `${import.meta.env.BASE_URL}utilities/css-grid`, element: <CssGrid /> },
    { id: 133, path: `${import.meta.env.BASE_URL}utilities/flex`, element: <Flex /> },
    { id: 134, path: `${import.meta.env.BASE_URL}utilities/gutters`, element: <Gutters /> },
    { id: 135, path: `${import.meta.env.BASE_URL}utilities/helpers`, element: <Helpers /> },
    { id: 136, path: `${import.meta.env.BASE_URL}utilities/position`, element: <Position /> },
    { id: 137, path: `${import.meta.env.BASE_URL}utilities/additional-content`, element: <AdditionalContent /> },

    { id: 138, path: `${import.meta.env.BASE_URL}widgets`, element: <Widgets /> },

    { id: 139, path: `${import.meta.env.BASE_URL}maps/leaflet-maps`, element: <LeafletMaps /> },
    { id: 140, path: `${import.meta.env.BASE_URL}maps/pigeon-maps`, element: <PigeonMaps /> },

    { id: 141, path: `${import.meta.env.BASE_URL}icons`, element: <Icons /> },





    { id: 142, path: `${import.meta.env.BASE_URL}tables/tables`, element: <Tables /> },
    { id: 143, path: `${import.meta.env.BASE_URL}tables/gridjs`, element: <GridjsTables /> },
    { id: 144, path: `${import.meta.env.BASE_URL}tables/data-tables`, element: <DataTables /> },

    { id: 145, path: `${import.meta.env.BASE_URL}charts/apex-charts/area-charts`, element: <AreaCharts /> },
    { id: 146, path: `${import.meta.env.BASE_URL}charts/apex-charts/bar-charts`, element: <BarCharts /> },
    { id: 147, path: `${import.meta.env.BASE_URL}charts/apex-charts/boxplot-charts`, element: <BoxplotCharts /> },
    { id: 148, path: `${import.meta.env.BASE_URL}charts/apex-charts/bubble-charts`, element: <BubbleCharts /> },
    { id: 149, path: `${import.meta.env.BASE_URL}charts/apex-charts/candlestick-charts`, element: <CandlestickCharts /> },
    { id: 150, path: `${import.meta.env.BASE_URL}charts/apex-charts/column-charts`, element: <ColumnCharts /> },
    { id: 151, path: `${import.meta.env.BASE_URL}charts/apex-charts/funnel-charts`, element: <FunnelCharts /> },
    { id: 152, path: `${import.meta.env.BASE_URL}charts/apex-charts/heatmap-charts`, element: <HeatmapCharts /> },
    { id: 153, path: `${import.meta.env.BASE_URL}charts/apex-charts/line-charts`, element: <LineCharts /> },
    { id: 154, path: `${import.meta.env.BASE_URL}charts/apex-charts/mixed-charts`, element: <MixedCharts /> },
    { id: 155, path: `${import.meta.env.BASE_URL}charts/apex-charts/pie-charts`, element: <PieCharts /> },
    { id: 156, path: `${import.meta.env.BASE_URL}charts/apex-charts/radar-charts`, element: <RadarCharts /> },
    { id: 157, path: `${import.meta.env.BASE_URL}charts/apex-charts/radialbar-charts`, element: <RadialbarCharts /> },
    { id: 158, path: `${import.meta.env.BASE_URL}charts/apex-charts/range-area-charts`, element: <RangeAreaCharts /> },
    { id: 159, path: `${import.meta.env.BASE_URL}charts/apex-charts/scatter-charts`, element: <ScatterCharts /> },
    { id: 160, path: `${import.meta.env.BASE_URL}charts/apex-charts/timeline-charts`, element: <TimelineCharts /> },
    { id: 161, path: `${import.meta.env.BASE_URL}charts/apex-charts/treemap-charts`, element: <TreemapCharts /> },
    { id: 162, path: `${import.meta.env.BASE_URL}charts/apex-charts/polararea-charts`, element: <PloarareaCharts /> },
    { id: 163, path: `${import.meta.env.BASE_URL}charts/chartjs-charts`, element: <ChartjsCharts /> },
    { id: 164, path: `${import.meta.env.BASE_URL}charts/echarts-charts`, element: <EchartsCharts /> },
];