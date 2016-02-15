callWithJQuery = (pivotModule) ->
    if typeof exports is "object" and typeof module is "object" # CommonJS
        pivotModule require("jquery")
    else if typeof define is "function" and define.amd # AMD
        define ["jquery"], pivotModule
    # Plain browser env
    else
        pivotModule jQuery
        
callWithJQuery ($) ->
    nf = $.pivotUtilities.numberFormat
    tpl = $.pivotUtilities.aggregatorTemplates

    frFmt =    nf(thousandsSep: " ", decimalSep: ",")
    frFmtInt = nf(digitsAfterDecimal: 0, thousandsSep: " ", decimalSep: ",")
    frFmtPct = nf(digitsAfterDecimal: 1, scaler: 100, suffix: "%", thousandsSep: " ", decimalSep: ",")

    $.pivotUtilities.locales.ar = 
        localeStrings:
        renderError: "حدث خطأ أثناء تشكيل الجدول المحوري."
        computeError: "حدث خطأ أثناء الحساب."
        uiRenderError: "حدث خطأ أثناء عرض الجدول المحوري."
        selectAll: "اختيار الكل"
        selectNone: "إلغاء الإختيار"
        tooMany: "لا يمكن عرض النتائج لكثرتها"
        filterResults: "إنتقاء النتائج"
        totals: "المجموع"
        vs: "من"
        by: "حسب"

    aggregators: 
        "العدد": tpl.count(frFmtInt)
        "عدد القيم المختلفة": tpl.countUnique(frFmtInt)
        "مختلف القيم": tpl.listUnique(", ")
        "المجموع": tpl.sum(frFmt)
        "مجموع الأعداد الصحيحة": tpl.sum(frFmtInt)
        "المعدل": tpl.average(frFmt)
        "الأدنى": tpl.min(frFmt)
        "الأقصى": tpl.max(frFmt)
        "جمع الكسور": tpl.sumOverSum(frFmt)
        "80٪ من الحد الأقصى": tpl.sumOverSumBound80(true, frFmt)
        "80٪ من الحد الأدنى": tpl.sumOverSumBound80(false, frFmt)
        "النسبة إلى المجموع الكلي": tpl.fractionOf(tpl.sum(), "total", frFmtPct)
        "النسبة إلى مجموع الصف": tpl.fractionOf(tpl.sum(), "row", frFmtPct)
        "النسبة إلى مجموع العمود": tpl.fractionOf(tpl.sum(), "col", frFmtPct)
        "النسبة إلى العدد الكلي": tpl.fractionOf(tpl.count(), "total", frFmtPct)
        "النسبة إلى عدد الصف": tpl.fractionOf(tpl.count(), "row", frFmtPct)
        "النسبة إلى عدد العمود": tpl.fractionOf(tpl.count(), "col", frFmtPct)

    renderers:
        "جدول": $.pivotUtilities.renderers["Table"]
        "أعمدة بيانية": $.pivotUtilities.renderers["Table Barchart"]
        "جدول تدرج الألوان": $.pivotUtilities.renderers["Heatmap"]
        "تدرج أفقي": $.pivotUtilities.renderers["Row Heatmap"]
        "تدرج  عمودي": $.pivotUtilities.renderers["Col Heatmap"]


