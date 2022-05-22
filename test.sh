#!/bin/bash

SET=$(seq 0 1000)

for i in $SET

do
  curl --location --request GET 'localhost:3000'
done

