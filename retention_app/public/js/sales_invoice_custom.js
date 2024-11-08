frappe.ui.form.on("Sales Invoice Retention Item", {
	retention_amount: function (frm, cdt, cdn) {
		var doc = locals[cdt][cdn];
		alert('here'); 
	}
}); 

// frappe.ui.form.on("Sales Invoice", {
// 	pocontract : function (frm) {
// 		if (frm.doc.pocontract) {
//             alert('here');
// 		}
// 	},
// });

frappe.ui.form.on("Sales Invoice Retention Item", {
	retention_amount: function (frm, cdt, cdn) {
		var doc = locals[cdt][cdn];
	},
	retention_tax: function(frm, cdt, cdn) {
        var doc = locals[cdt][cdn];
        if (doc.retention_tax > 100) {
            frappe.msgprint({
                title: __("Invalid Tax Value"),
                indicator: "red",
                message: __("Tax value cannot exceed 100. It has been reset to 0.")
            });
            frappe.model.set_value(cdt, cdn, "retention_tax", 0);
        }
        frm.refresh_field("custom_retentions");
    }
});