﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Base
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
    }
}
