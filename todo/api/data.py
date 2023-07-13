import frappe
@frappe.whitelist()
def get_data():
    return frappe.db.get_all("Demo")