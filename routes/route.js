const router = require('express').Router();
const authenticate = require('../authenticate');



const { getProjectDetail, getSingleProject, deleteProject, addNewProject, updateProjectDetail } = require('../controllers/project-controller.js');
const { signinbygmail, checkotpnow, genarateOtpandsendtoemail, margeClientToLead, getSingleUserSiteInformation, addSiteDetailsForDemo, getAllUsers, getUserWithQueries, getSingleUser, addNewUser, updateUserDetail, deleteUser } = require('../controllers/user-controller.js');
const { clientAprrovedCo, newQuotationaddednotification, statusofInstallmentisChange, statusofTicketChange, quotationFinalizeBytheClient, convertToContractNotificationForAll, getAllNotification, getSingleNotification, addNewNotification, updateNotification, deleteNotification } = require('../controllers/notification-controller.js');
const { addQueryUpdate, getSingleQuery, getAllQueries, getUserAllQueries, addNewQueries, updateQueries, deleteQueries } = require('../controllers/queries-controller.js');
const { getSingleInstallmentWithChangeOrder, getAllInstallmentsDetalis, getSingleUserInstallments, addNewMyInstallment, updateMyInstallment, deleteMyInstallment, addPaidAmount, chatsInstallment, getSingleUserAllInstallmentsWithPaidAmounts } = require('../controllers/myinstallments-controller.js');
const { addManagerInLead, addNewWebsitLead, addEngineerInLead, getLeadWithdelays, searchLead, getAllLeads, getWebAllLeads, getSingleLead, addNewLead, updateLead, deleteLead, getLeadWithProject, addNewRenovationLead, getRenovationAllLeads, getRenovationLead } = require('../controllers/leads-controller.js');
const { getAllProjectstructureDetail, getSingleProjectstructure, deleteProjectstructure, addNewProjectstructure, updateProjectstructureDetail } = require('../controllers/project-structure-controller.js');
const { addRoom, getAllProjectspaceDetail, getSingleProjectspace, deleteProjectspace, addNewProjectspace, updateProjectspaceDetail } = require('../controllers/project-space-controller.js');
const { addNewNotices, getSingleUserNotices, getAllNoticesDetail, deleteNotices, updateNoticesDetail } = require('../controllers/notices-controller.js');
const { addNewChangeOrderInstallment, getSingleUserChangeOrderInstallment, getAllChangeOrderInstallmentDetail, deleteChangeOrderInstallment, updatechangeOrderInstallmentDetail } = require('../controllers/change-order-installment-controller.js');
const { addNewChatOrderInstallment, getSingleUserChatOrderInstallment, getAllChatOrderInstallmentDetail, deleteChatOrderInstallment, updateChatOrderInstallmentDetail } = require('../controllers/Chats-Change-Installment-controller.js');
const { getSingleLeadactivities, getSingleLeadOnlyActivities, getSingleProjectAllDocuments, getSingleProjectAllPhotoes, addNewActivities, updateActivities, deleteActivities, createAllActivites } = require('../controllers/activities-controller.js');
const { updateChecks, updateMaterial, updatesubTask, addMatreial, addCheck, addSubTask, getSubActivitiesWithdetails, addNewUpdateInSubActivity, addNewSubActivity, getSubActivitiesofSingleActivity, deleteSubActivity, updatesubactivity } = require('../controllers/sub-activites-controller.js');
const { addNewQuotation, updateQuotation, deleteQuotationOne, commentsonquatation, getspaceWithRoom, addNewProjectInQuotaion, addNewStructureInQuotation, addNewProjectspaceinQuatation, addSelectedQuotationinLead, getQuotationWithDetails, getAllQuotationInLead } = require('../controllers/quotation-controller.js');
const { updatesnags, addMultiplesSnags } = require('../controllers/snags-controller.js');
const { CalculationCheckTentetive, getAllapointments, addNewAppointment, addMangagerProfile, addProfileofLead, addProfileofEngiiner, getAllEngineerList, getAllLeadsList, getAllManagersList, getPriceList, updatePriceList, addPriceList } = require('../controllers/extra-controller.js');

// Project routes

router.post("/add-nwe-project", addNewProject)
router.get("/get-single-project/:_id", getSingleProject)
router.get("/all-projects", getProjectDetail)
router.delete("/delete-project/:_id", deleteProject)
router.put("/update-project-detail/:_id", authenticate, updateProjectDetail)

// User routes

router.get("/all-users", authenticate, getAllUsers)
router.get("/get-user-with-queries/:id", getUserWithQueries)
router.get("/get-single-user/:_id", getSingleUser)
router.post("/user-create-profile", addNewUser)
router.put("/update-user-detail/:_id", updateUserDetail)
router.delete("/delete-user/:_id", deleteUser)
router.post("/add-Site-Details-For-Demo", addSiteDetailsForDemo)
router.get("/get-single-user-site-info/:_id", authenticate, getSingleUserSiteInformation)
router.post("/marge-client-to-lead", authenticate, margeClientToLead)
router.post("/genarate-otp-and-send", genarateOtpandsendtoemail)
router.post("/check-otp-now", checkotpnow)
router.post("/signin-by-gmail", signinbygmail)

// notification routes 

// router.get("/all-notifications", getAllNotification)
router.get("/get-single-notification/:_id", authenticate, getSingleNotification)
router.post("/create-notification", authenticate, addNewNotification)
router.put("/update-notification/:_id", authenticate, updateNotification)
router.delete("/delete-notification/:_id", deleteNotification)
router.post("/create-notification-for-convert-contract", authenticate, convertToContractNotificationForAll)
router.post("/create-notification-for-finalize-quotation-by-clinet", authenticate, quotationFinalizeBytheClient)
router.post("/status-of-ticekt-changed", authenticate, statusofTicketChange)
router.post("/status-of-installment-now-changed", authenticate, statusofInstallmentisChange)
router.post("/new-quotation-add-notification", authenticate, newQuotationaddednotification)
router.post("/cliet-approved-co", authenticate, clientAprrovedCo)

// Queries routes

router.post("/add-query-update", addQueryUpdate)
router.get("/get-single-query/:_id", authenticate, getSingleQuery)
router.get("/all-queries", getAllQueries)
router.get("/get-user-all-queries/:_id", authenticate, getUserAllQueries)
// router.post("/create-queries", authenticate, addNewQueries)
router.put("/update-queries/:_id", updateQueries)
router.delete("/delete-queries/:_id", deleteQueries)

// MyInstallment routes
router.get("/get-single-installment-with-change-order/:_id", authenticate, getSingleInstallmentWithChangeOrder)
router.get("/get-all-myinstallments", getAllInstallmentsDetalis)
router.get("/get-single-user-myinstallment/:_id", authenticate, getSingleUserInstallments)
router.post("/create-myinstallment", authenticate, addNewMyInstallment)
router.put("/update-myinstallment/:_id", authenticate, updateMyInstallment)
router.delete("/delete-myinstallment/:_id", deleteMyInstallment)
router.post("/create-paid-amount", authenticate, addPaidAmount)
router.post("/add-chat-installment", authenticate, chatsInstallment)
router.get("/get-single-user-all-myinstallments-with-paidamount/:_id", authenticate, getSingleUserAllInstallmentsWithPaidAmounts)


// LEAD routes

router.get("/get-all-web-leads", authenticate, getWebAllLeads)
router.get("/get-all-leads", authenticate, getAllLeads)
router.get("/get-single-lead/:id", getSingleLead)
router.post("/create-lead", authenticate, addNewLead)
router.put("/update-lead/:_id", authenticate, updateLead)
router.delete("/delete-lead/:_id", deleteLead)
router.get("/get-lead-with-project/:id", authenticate, getLeadWithProject)
router.get("/search/:key", searchLead)
router.get("/get-lead-delays/:id", authenticate, getLeadWithdelays)
router.post("/add-eng-in-lead", addEngineerInLead)
router.post("/add-manager-in-lead", addManagerInLead)
router.post("/add-lead-for-website", addNewWebsitLead)
router.post("/add-lead-for-renovation", addNewRenovationLead)
router.get("/get-all-renovation-leads", authenticate, getRenovationAllLeads)
router.get("/get-renovation-single-lead/:id", authenticate, getRenovationLead)

// ProjectStructure routes

router.post("/add-new-project-structure", addNewProjectstructure)
// router.get("/get-single-project-structure/:_id", getSingleProjectstructure)
// router.get("/get-all-project-structure-detail", getAllProjectstructureDetail)
// router.delete("/delete-project-structure/:_id", deleteProjectstructure)
// router.put("/update-project-structure-detail/:_id", updateProjectstructureDetail)

// Project Space routes

// router.post("/add-new-project-space", addNewProjectspace)
// router.get("/get-single-project-space/:_id", getSingleProjectspace)
// router.get("/get-all-project-space-detail", getAllProjectspaceDetail)
// router.delete("/delete-project-space/:_id", deleteProjectspace)
// router.put("/update-project-space-detail/:_id", updateProjectspaceDetail)
router.post("/add-new-room", authenticate, addRoom)

// Notices routes

router.post("/add-new-notices", authenticate, addNewNotices)
router.get("/get-single-user-notices/:_id", getSingleUserNotices)
router.get("/get-all-notices-detail", getAllNoticesDetail)
router.delete("/delete-notices/:_id", deleteNotices)
router.put("/update-notices-detail/:_id", updateNoticesDetail)

// Change Order Installment

router.post("/add-new-change-order-installment", authenticate, addNewChangeOrderInstallment)
// router.get("/get-single-change-order-installment/:_id", getSingleUserChangeOrderInstallment)
// router.get("/get-all-change-order-installment-detail", getAllChangeOrderInstallmentDetail)
// router.delete("/delete-change-order-installment/:_id", deleteChangeOrderInstallment)
router.put("/update-change-order-installment-detail/:_id", authenticate, updatechangeOrderInstallmentDetail)

// Chat Change Order Installment

router.post("/add-new-order-installment-chat", authenticate, addNewChatOrderInstallment)
router.get("/get-single-order-installment-chat/:_id", authenticate, getSingleUserChatOrderInstallment)
// router.get("/get-all-order-installment-chat-detail", getAllChatOrderInstallmentDetail)
// router.delete("/delete-order-installment-chat/:_id", deleteChatOrderInstallment)
// router.put("/update-order-installment-chat-detail/:_id", updateChatOrderInstallmentDetail)

// Activites

router.post("/add-new-activity", addNewActivities)
router.get("/get-single-lead-all-activities/:_id", authenticate, getSingleLeadactivities)
router.get("/get-single-lead--Only-activities/:_id", authenticate, getSingleLeadOnlyActivities)
router.get("/get-single-project-all-photos/:_id", authenticate, getSingleProjectAllPhotoes)
// router.get("/get-all-order-installment-chat-detail", getAllChatOrderInstallmentDetail)
// router.delete("/delete-activity/:_id", deleteActivities)
router.put("/update-activity/:_id", authenticate, updateActivities)
router.post("/add-all-activities", authenticate, createAllActivites)
router.get("/get-single-project-all-documents/:_id", authenticate, getSingleProjectAllDocuments)


// SubActivites

router.post("/add-new-subactivity", authenticate, addNewSubActivity)
router.get("/get-all-subactivities-ofsingle-activity/:_id", authenticate, getSubActivitiesofSingleActivity)
router.get("/get-sub-activites-with-details/:_id", authenticate, getSubActivitiesWithdetails)
// router.delete("/delete-subactivity/:_id", deleteSubActivity)
router.put("/update-subactivity/:_id", authenticate, updatesubactivity)
router.post("/add-new-update-in-subactivity", authenticate, addNewUpdateInSubActivity)
router.post("/add-sub-task", authenticate, addSubTask)
router.post("/add-checks", authenticate, addCheck)
router.put("/update-sub-task/:_id", authenticate, updatesubTask)
router.put("/update-checks/:_id", authenticate, updateChecks)
router.put("/update-material/:_id", authenticate, updateMaterial)
router.post("/add-materials", authenticate, addMatreial)


// Quotation

// router.post("/add-new-project-in-quotation", authenticate, addNewProjectInQuotaion)
// router.post("/add-structure-in-quatation", authenticate, addNewStructureInQuotation)
router.get("/get-quotatin-with-details/:id", authenticate, getQuotationWithDetails)
// router.post("/add-space-in-quotation", authenticate, addNewProjectspaceinQuatation)
router.post("/add-selected-quotation-in-lead", addSelectedQuotationinLead)
router.get("/get-all-quotatins-list/:id", authenticate, getAllQuotationInLead)
router.get("/get-space-with-rooms/:id", authenticate, getspaceWithRoom) // Admin API remaining
router.post("/add-commentsonquatation", authenticate, commentsonquatation)
router.delete("/delete-quotation-one/:_id", authenticate, deleteQuotationOne)
router.put("/update-quotation/:_id", authenticate, updateQuotation)
router.post("/add-new-quotation", authenticate, addNewQuotation)


// Snags

router.put("/update-snags/:_id", updatesnags)
router.post("/add-multiples-snags", addMultiplesSnags)



// Extra

router.post("/add-appointment", addNewAppointment) // web API
router.get("/get-all-appointments", authenticate, getAllapointments) // Admin API remaining
router.post("/add-manager-profile", authenticate, addMangagerProfile) // Admin API
router.post("/add-lead-profile", authenticate, addProfileofLead) // Admin API
router.post("/add-engiiner-profile", authenticate, addProfileofEngiiner) // Admin API
router.get("/get-all-enginner-list", authenticate, getAllEngineerList) // Admin API
router.get("/get-all-lead-list", authenticate, getAllLeadsList) // Admin API
router.get("/get-all-manager-list", authenticate, getAllManagersList) // Admin API
router.get("/get-price-list", authenticate, getPriceList) // Admin API
router.put("/update-price-list/:_id", authenticate, updatePriceList) // Admin API
router.post("/add-price-list", addPriceList)
router.post("/check-tentetive-amount", authenticate, CalculationCheckTentetive)







module.exports = router;