from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in retention_app/__init__.py
from retention_app import __version__ as version

setup(
	name="subscription_app",
	version=version,
	description="A Frappe ERPNext application that will add retention to Sales Invoice",
	author="Khayam Khan",
	author_email="khayamkhan852@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)