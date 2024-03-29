const router = require('express').Router();
const authenticate = require('../authenticate');

const { getProjectDetail, getSingleProject, deleteProject, addNewProject, updateProjectDetail } = require('../controllers/project-controller.js');
const { addSiteDetailsForDemo, getAllUsers, getUserWithQueries, getSingleUser, addNewUser, updateUserDetail, deleteUser } = require('../controllers/user-controller.js');
const { getAllNotification, getSingleNotification, addNewNotification, updateNotification, deleteNotification } = require('../controllers/notification-controller.js');
const { addQueryUpdate, getSingleQuery, getAllQueries, getUserAllQueries, addNewQueries, updateQueries, deleteQueries } = require('../controllers/queries-controller.js');
const { getSingleInstallmentWithChangeOrder, getAllInstallmentsDetalis, getSingleUserInstallments, addNewMyInstallment, updateMyInstallment, deleteMyInstallment, addPaidAmount, chatsInstallment } = require('../controllers/myinstallments-controller.js');
const { getLeadWithdelays, searchLead, getAllLeads, getSingleLead, addNewLead, updateLead, deleteLead, getLeadWithProject } = require('../controllers/leads-controller.js');
const { getAllProjectstructureDetail, getSingleProjectstructure, deleteProjectstructure, addNewProjectstructure, updateProjectstructureDetail } = require('../controllers/project-structure-controller.js');
const { addRoom, getAllProjectspaceDetail, getSingleProjectspace, deleteProjectspace, addNewProjectspace, updateProjectspaceDetail } = require('../controllers/project-space-controller.js');
const { addNewNotices, getSingleUserNotices, getAllNoticesDetail, deleteNotices, updateNoticesDetail } = require('../controllers/notices-controller.js');
const { addNewChangeOrderInstallment, getSingleUserChangeOrderInstallment, getAllChangeOrderInstallmentDetail, deleteChangeOrderInstallment, updatechangeOrderInstallmentDetail } = require('../controllers/change-order-installment-controller.js');
const { addNewChatOrderInstallment, getSingleUserChatOrderInstallment, getAllChatOrderInstallmentDetail, deleteChatOrderInstallment, updateChatOrderInstallmentDetail } = require('../controllers/Chats-Change-Installment-controller.js');
const { getSingleLeadactivities, addNewActivities, updateActivities, deleteActivities } = require('../controllers/activities-controller.js');
const { updateChecks, updatesubTask, addCheck, addSubTask, getSubActivitiesWithdetails, addNewUpdateInSubActivity, addNewSubActivity, getSubActivitiesofSingleActivity, deleteSubActivity, updatesubactivity } = require('../controllers/sub-activites-controller.js');
const { updateQuotation, deleteQuotationOne, commentsonquatation, getspaceWithRoom, addNewProjectInQuotaion, addNewStructureInQuotation, addNewProjectspaceinQuatation, addSelectedQuotationinLead, getQuotationWithDetails, getAllQuotationInLead } = require('../controllers/quotation-controller.js');
const { updatesnags } = require('../controllers/snags-controller.js');

// Project routes

router.post("/add-nwe-project", addNewProject)
router.get("/get-single-project/:_id", getSingleProject)
router.get("/all-projects", getProjectDetail)
router.delete("/delete-project/:_id", deleteProject)
router.put("/update-project-detail/:_id", updateProjectDetail)

// User routes

router.get("/all-users", getAllUsers)
router.get("/get-user-with-queries/:id", getUserWithQueries)
router.get("/get-single-user/:_id", getSingleUser)
router.post("/user-create-profile", addNewUser)
router.put("/update-user-detail/:_id", updateUserDetail)
router.delete("/delete-user/:_id", deleteUser)
router.post("/add-Site-Details-For-Demo", addSiteDetailsForDemo)

// notification routes 

router.get("/all-notifications", getAllNotification)
router.get("/get-single-notification/:_id", getSingleNotification)
router.post("/create-notification", addNewNotification)
router.put("/update-notification/:_id", updateNotification)
router.delete("/delete-notification/:_id", deleteNotification)

// Queries routes

router.post("/add-query-update", addQueryUpdate)
router.get("/get-single-query/:_id", getSingleQuery)
router.get("/all-queries", getAllQueries)
router.get("/get-user-all-queries/:_id", getUserAllQueries)
router.post("/create-queries", addNewQueries)
router.put("/update-queries/:_id", updateQueries)
router.delete("/delete-queries/:_id", deleteQueries)

// MyInstallment routes
router.get("/get-single-installment-with-change-order/:_id", getSingleInstallmentWithChangeOrder)
router.get("/get-all-myinstallments", getAllInstallmentsDetalis)
router.get("/get-single-user-myinstallment/:_id", getSingleUserInstallments)
router.post("/create-myinstallment", addNewMyInstallment)
router.put("/update-myinstallment/:_id", updateMyInstallment)
router.delete("/delete-myinstallment/:_id", deleteMyInstallment)
router.post("/create-paid-amount", addPaidAmount)
router.post("/add-chat-installment", chatsInstallment)


// LEAD routes

router.get("/get-all-leads", getAllLeads)
router.get("/get-single-lead/:id", getSingleLead)
router.post("/create-lead", addNewLead)
router.put("/update-lead/:_id", updateLead)
router.delete("/delete-lead/:_id", deleteLead)
router.get("/get-lead-with-project/:id", getLeadWithProject)
router.get("/search/:key", searchLead)
router.get("/get-lead-delays/:id", getLeadWithdelays)

// ProjectStructure routes

router.post("/add-new-project-structure", addNewProjectstructure)
router.get("/get-single-project-structure/:_id", getSingleProjectstructure)
router.get("/get-all-project-structure-detail", getAllProjectstructureDetail)
router.delete("/delete-project-structure/:_id", deleteProjectstructure)
router.put("/update-project-structure-detail/:_id", updateProjectstructureDetail)

// Project Space routes

router.post("/add-new-project-space", addNewProjectspace)
router.get("/get-single-project-space/:_id", getSingleProjectspace)
router.get("/get-all-project-space-detail", getAllProjectspaceDetail)
router.delete("/delete-project-space/:_id", deleteProjectspace)
router.put("/update-project-space-detail/:_id", updateProjectspaceDetail)
router.post("/add-new-room", addRoom)

// Notices routes

router.post("/add-new-notices", addNewNotices)
router.get("/get-single-user-notices/:_id", getSingleUserNotices)
router.get("/get-all-notices-detail", getAllNoticesDetail)
router.delete("/delete-notices/:_id", deleteNotices)
router.put("/update-notices-detail/:_id", updateNoticesDetail)

// Change Order Installment

router.post("/add-new-change-order-installment", addNewChangeOrderInstallment)
router.get("/get-single-change-order-installment/:_id", getSingleUserChangeOrderInstallment)
router.get("/get-all-change-order-installment-detail", getAllChangeOrderInstallmentDetail)
router.delete("/delete-change-order-installment/:_id", deleteChangeOrderInstallment)
router.put("/update-change-order-installment-detail/:_id", updatechangeOrderInstallmentDetail)

// Chat Change Order Installment

router.post("/add-new-order-installment-chat", addNewChatOrderInstallment)
router.get("/get-single-order-installment-chat/:_id", getSingleUserChatOrderInstallment)
router.get("/get-all-order-installment-chat-detail", getAllChatOrderInstallmentDetail)
router.delete("/delete-order-installment-chat/:_id", deleteChatOrderInstallment)
router.put("/update-order-installment-chat-detail/:_id", updateChatOrderInstallmentDetail)

// Activites

router.post("/add-new-activity", addNewActivities)
router.get("/get-single-lead-all-activities/:_id", getSingleLeadactivities)
// router.get("/get-all-order-installment-chat-detail", getAllChatOrderInstallmentDetail)
router.delete("/delete-activity/:_id", deleteActivities)
router.put("/update-activity/:_id", updateActivities)

// SubActivites

router.post("/add-new-subactivity", addNewSubActivity)
router.get("/get-all-subactivities-ofsingle-activity/:_id", getSubActivitiesofSingleActivity)
router.get("/get-sub-activites-with-details/:_id", getSubActivitiesWithdetails)
router.delete("/delete-subactivity/:_id", deleteSubActivity)
router.put("/update-subactivity/:_id", updatesubactivity)
router.post("/add-new-update-in-subactivity", addNewUpdateInSubActivity)
router.post("/add-sub-task", addSubTask)
router.post("/add-checks", addCheck)
router.put("/update-sub-task/:_id", updatesubTask)
router.put("/update-checks/:_id", updateChecks)

// Quotation

router.post("/add-new-project-in-quotation", addNewProjectInQuotaion)
router.post("/add-structure-in-quatation", addNewStructureInQuotation)
router.get("/get-quotatin-with-details/:id", getQuotationWithDetails)
router.post("/add-space-in-quotation", addNewProjectspaceinQuatation)
router.post("/add-selected-quotation-in-lead", addSelectedQuotationinLead)
router.get("/get-all-quotatins-list/:id", getAllQuotationInLead)
router.get("/get-space-with-rooms/:id", getspaceWithRoom)
router.post("/add-commentsonquatation", commentsonquatation)
router.delete("/delete-quotation-one/:_id", deleteQuotationOne)
router.put("/update-quotation/:_id", updateQuotation)



// Snags

router.put("/update-snags/:_id", updatesnags)






module.exports = router;