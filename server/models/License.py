import datetime


class License():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string"
                },
                "alert_and_failure": {
                    "type": "boolean"
                },
                "orders": {
                    "type": "boolean"
                },
                "budget": {
                    "type": "boolean"
                },
                "equipment_history": {
                    "type": "boolean"
                },
                "preventive_maintenance": {
                    "type": "boolean"
                },
                "update_data": {
                    "type": "boolean"
                },
                "documentation": {
                    "type": "boolean"
                },
                "about": {
                    "type": "boolean"
                }
            }
        }

    def __init__(
            self,
            alert_and_failure,
            orders,
            budget,
            equipment_history,
            preventive_maintenance,
            update_data,
            documentation,
            about):
        self.alert_and_failure = alert_and_failure
        self.orders = orders
        self.budget = budget
        self.equipment_history = equipment_history
        self.preventive_maintenance = preventive_maintenance
        self.update_data = update_data
        self.documentation = documentation
        self.about = about
        self.date = datetime.datetime.now().isoformat()
