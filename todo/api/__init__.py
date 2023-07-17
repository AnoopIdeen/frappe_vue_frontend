import frappe
@frappe.whitelist()
def get_data():
    return frappe.db.get_all("Demo")


@frappe.whitelist()
def put_data(name):
    new_doc= frappe.new_doc("Demo")
    new_doc.test = name
    new_doc.insert(ignore_permissions=True)