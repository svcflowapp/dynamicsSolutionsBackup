if (typeof a3i === "undefined") { a3i = { _namespace: true }; }
if (typeof a3i.Series === "undefined") { a3i.Series = { _namespace: true }; }
if (typeof a3i.Series.BrandSlide === "undefined") { a3i.Series.BrandSlide = { _namespace: true }; }

a3i.Series.BrandSlide.TriggerFlow = function (primaryControl) {
    let formContext = primaryControl;

    alert("Submitting Brand Slide request.");

    let recordId = formContext.data.entity.getId();
    recordId = recordId.replace("{", "").replace("}", "");
    const entityName = formContext.data.entity.getEntityName();
    const seriesName = formContext.getAttribute("a3i_seriesname").getValue();
    const exportName = "Brand Slide " + seriesName;

    let data = {
        "a3i_name": exportName,
        "a3i_exporttype": 430830001,
        "a3i_entityschemaname": entityName,
        "a3i_entityrecordid": recordId,
    };

    Xrm.WebApi.createRecord("a3i_export", data).then(
        function success(result) {
            alert("Request submitted. The report will be emailed to you within 5 minutes.");
        },
        function (error) {
            alert("Error: " + error.message);
        }
    );
};

a3i.Series.BrandSlide.DisplayRule = function(primaryControl) {
    let formContext = primaryControl;

    let formId = formContext.ui.formSelector.getCurrentItem().getId();

    if (formId === "d1924c1c-3847-ec11-8c62-002248006148" || formId === "4dc88c40-728e-ec11-b400-00224800e907") return false;

    return true;
};
