//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/record_a_check/case_details', function(req, res){
    req.session.data.hasVisitedPageCaseDetails = true;

    res.render('/record_a_check/case_details');
});

router.get('/record_a_check/sample_details', function(req, res){
    req.session.data.hasVisitedPageSampleDetails = true;

    res.render('/record_a_check/sample_details');
});

router.get('/record_a_check/award_details', function(req, res){
    req.session.data.hasVisitedPageAwardDetails = true;

    res.render('/record_a_check/award_details');
});

router.get('/record_a_check/assurance_overview', function( req, res){
    const hasVisitedPageCaseDetails = req.session.data.hasVisitedPageCaseDetails
    const hasVisitedPageSampleDetails = req.session.data.hasVisitedPageSampleDetails
    const hasVisitedPageAwardDetails = req.session.data.hasVisitedPageAwardDetails

    res.render('/record_a_check/assurance_overview', {
        hasVisitedPageCaseDetails: hasVisitedPageCaseDetails,
        hasVisitedPageSampleDetails: hasVisitedPageSampleDetails,
        hasVisitedPageAwardDetails: hasVisitedPageAwardDetails
    });
});