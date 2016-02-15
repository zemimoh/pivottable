(function () {
    var callWithJQuery;

    callWithJQuery = function (pivotModule) {
        if (typeof exports === "object" && typeof module === "object") {
            return pivotModule(require("jquery"));
        } else if (typeof define === "function" && define.amd) {
            return define(["jquery"], pivotModule);
        } else {
            return pivotModule(jQuery);
        }
    };

    callWithJQuery(function ($) {
        var frFmt, frFmtInt, frFmtPct, nf, tpl;
        nf = $.pivotUtilities.numberFormat;
        tpl = $.pivotUtilities.aggregatorTemplates;
        frFmt = nf({
            thousandsSep: " ",
            decimalSep: ","
        });
        frFmtInt = nf({
            digitsAfterDecimal: 0,
            thousandsSep: " ",
            decimalSep: ","
        });
        frFmtPct = nf({
            digitsAfterDecimal: 1,
            scaler: 100,
            suffix: "%",
            thousandsSep: " ",
            decimalSep: ","
        });
        return $.pivotUtilities.locales.ar = {
            localeStrings: {
                renderError: "حدث خطأ أثناء تشكيل الجدول المتشابك.",
                computeError: "حدث خطأ أثناء الحساب.",
                uiRenderError: "حدث خطأ أثناء عرض الجدول المتشابك.",
                selectAll: "اختيار الكل",
                selectNone: "إلغاء الإختيار",
                tooMany: "لا يمكن عرض النتائج لكثرتها",
                filterResults: "إنتقاء النتائج",
                totals: "المجموع",
                vs: "من",
                by: "حسب"
            },
            aggregators: {
                "عدد": tpl.count(frFmtInt),
                "عدد القيم المختلفة": tpl.countUnique(frFmtInt),
                "مختلف القيم": tpl.listUnique(", "),
                "مجموع": tpl.sum(frFmt),
                "مجموع الأعداد الصحيحة": tpl.sum(frFmtInt),
                "معدل": tpl.average(frFmt),
                "الأدنى": tpl.min(frFmt),
                "الأقصى": tpl.max(frFmt),
                "جمع الكسور": tpl.sumOverSum(frFmt),
                "80٪ من الحد الأقصى": tpl.sumOverSumBound80(true, frFmt),
                "80٪ من الحد الأدنى": tpl.sumOverSumBound80(false, frFmt),
                "النسبة إلى المجموع الكلي": tpl.fractionOf(tpl.sum(), "total", frFmtPct),
                "النسبة إلى مجموع الصف": tpl.fractionOf(tpl.sum(), "row", frFmtPct),
                "النسبة إلى مجموع العمود": tpl.fractionOf(tpl.sum(), "col", frFmtPct),
                "النسبة إلى العدد الكلي": tpl.fractionOf(tpl.count(), "total", frFmtPct),
                "النسبة إلى عدد الصف": tpl.fractionOf(tpl.count(), "row", frFmtPct),
                "النسبة إلى عدد العمود": tpl.fractionOf(tpl.count(), "col", frFmtPct)
            },
            renderers: {
                "جدول": $.pivotUtilities.renderers["Table"],
                "أعمدة توضيحية": $.pivotUtilities.renderers["Table Barchart"],
                "جدول تدرج الألوان": $.pivotUtilities.renderers["Heatmap"],
                "تدرج أفقي": $.pivotUtilities.renderers["Row Heatmap"],
                "تدرج  عمودي": $.pivotUtilities.renderers["Col Heatmap"]
            }
        };
    });

}).call(this);

//# sourceMappingURL=pivot.ar.js.map
