$(function(e) {
    "use strict";
    jQuery.fn.serializeFromTable = function(t) {
        let n = e.extend({ columnNameBy: "default", dataType: "array", displayCount: !1, hideColumns: [], getValueByDesc: !1 }, t);
        if ("table" != e(this).prop("tagName").toLowerCase()) return console.error("This plugin can only be applied to table element."), "{}";
        let r = e(this).attr("id"),
            a = e("#" + r),
            i = e(a).find("thead");
        if (i.length < 1) return console.error("Unable to find thead"), "{}";
        let o = e(a).find("tbody");
        if (o.length < 1) return console.error("Unable to find tbody"), "{}";
        let l = e(a).find("tbody>tr").length,
            u = [],
            s = [];

        function c(t) {
            let r = t.find("select,input,label,textarea").last(),
                a = r.prop("tagName");
            if (null == a) return t.text();
            if ("input" == a.toLowerCase()) {
                let n = r.first().attr("type"),
                    a = r.first().attr("name");
                if ("radio" == n.toLowerCase()) { if (null == a) return console.error("'name' attribute missing for radio type."), ""; let e = t.find("input[name='" + a + "']:checked"); return t.find("input[name='" + a + "']").is(":checked") ? e.val() : "" }
                if ("checkbox" == n.toLowerCase()) {
                    if (null == a) return console.error("'name' attribute missing for checkbox type."), "";
                    t.find("input[name='" + a + "']:checked");
                    var i = [];
                    return e.each(e("input[name='" + a + "']:checked", t), (function() { i.push(e(this).val()) })), i.join(",")
                }
                return r.val()
            }
            if ("select" == a.toLowerCase()) {
                if (n.getValueByDesc ) {
                    if (r.val().length > 1) {
                        var text = e.trim(e(r).text());
                        var i = text.split("  ");
                        return i.join(",");
                    }else{
                        return e(":selected", r).text();
                    }
                }
                return r.val();
            }
            return "textarea" == a.toLowerCase() ? r.val() : t.text()
        }
        e.each(e(i).find("tr>th"), (function(t, r) { "default" == n.columnNameBy.toLowerCase() ? u.push(e.trim(e(r).text())) : null != e(r).attr(n.columnNameBy) ? u.push(e.trim(e(r).attr(n.columnNameBy))) : u.push(e.trim(e(r).text())) })), e.each(e(o).find("tr"), (function(t, r) {
            for (var a = {}, i = 0; i < u.length; i++)
                if (-1 == n.hideColumns.indexOf(i)) {
                    var o = e(r).find("td").eq(i);
                    a[u[i]] = e.trim(c(o))
                } s.push(a)
        }));
        let d = {};
        return "object" == n.dataType.toLowerCase() ? (n.displayCount && (d.count = l), d.data = s, JSON.stringify(d)) : JSON.stringify(s)
    } /*author:Lalitkumar Naresh Annaldas*/
}(jQuery));
