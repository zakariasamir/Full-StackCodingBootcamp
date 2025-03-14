class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
    
    def born(self, **kwargs):
        kwargs['is_child'] = True
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family! Welcome {kwargs['name']}!")
    
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
    
    def family_presentation(self):
        print(f"\n{self.last_name} Family Members:")
        for member in self.members:
            print(f"Name: {member['name']}")
            print(f"Age: {member['age']}")
            print(f"Gender: {member['gender']}")
            print(f"Is Child: {member['is_child']}")
            print()

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['incredible_name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old!")
    
    def incredible_presentation(self):
        print("\n*Here is our powerful family*")
        super().family_presentation()


incredible_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power':'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power':'read minds','incredible_name':'SuperWoman'}
]


incredibles = TheIncredibles("Incredibles", incredible_members)


print("Initial incredible presentation:")
incredibles.incredible_presentation()


print("\nTesting powers:")
try:
    incredibles.use_power("Michael")
    incredibles.use_power("Sarah")
except Exception as e:
    print(e)


print("\nAdding Baby Jack to the family:")
incredibles.born(
    name="Jack",
    age=0,
    gender="Male",
    power="Unknown Power",
    incredible_name="SuperBaby"
)


print("\nUpdated incredible presentation:")
incredibles.incredible_presentation()


print("\nTrying to use Jack's power:")
try:
    incredibles.use_power("Jack")
except Exception as e:
    print(e)