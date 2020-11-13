'''This module has been built to convert between the different
   units of length'''

def to_cm(number):
	'''This function converts meter to centimeter'''
	return number*100

def to_mm(number):
	'''This function converts meter to millimeter'''
	return number*1000

def to_micro(number):
	'''This function converts meter to micrometer'''
	return number*10e6

def from_cm(number):
	'''This function converts centimeter to meter'''
	return number/100

def from_mm(number):
	'''This function converts millimeter to meter'''
	return number/1000
def from_micro(number):
	'''This function converts micrometer to meter'''
	return number/10e6
